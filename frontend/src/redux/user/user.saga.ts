import { call, takeLatest, put, all } from "@redux-saga/core/effects"
import { auth, googleProvider } from "../../firebase/firebase.utils"
import { User } from "../../model/User"
import { UserService } from "../../services"
import { setupInterceptor } from "../../services/custom-axios"
import { ReduxAction } from "../action"
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure, unAuthenticated } from "./user.action"
import { UserActionTypes } from "./user.types"

export function* getSnapshotFromUserAuth(userAuth: firebase.default.User, additionalData?: string) {
    try {
        const idToken: string = yield userAuth.getIdToken();
        yield console.log("Firebase token: ", idToken);
        const result: boolean = yield UserService.signIn(idToken);
        if (result) {
            const user: User = yield UserService.getUserInfo();
            yield put(signInSuccess(user))
        }
    } catch (error) {
        alert(error);
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        alert(error);
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }: ReduxAction) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        alert(error);
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}


export function* isUserAuthenticated() {
    try {
        const token: string = yield localStorage.getItem("Authorization");
        if (!token) {
            yield put(unAuthenticated());
            return;
        }
        setupInterceptor(token);
        const user: User = yield UserService.getUserInfo();
        yield put(signInSuccess(user))
    } catch (error) {
        alert(error);
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
    try {
        yield UserService.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}


export function* signUp({ payload: { email, password, displayName } }: ReduxAction) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: displayName }));
    } catch (error) {
        alert(error);
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }: ReduxAction) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}