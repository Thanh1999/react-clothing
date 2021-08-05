import { auth, createUserProfileDocument, getCurrentUser, provider } from '../../firebase/firebase.utils';
import UserActionTypes from './user.types';

export const loadingStart = () => ({
    type: UserActionTypes.LOADING_START
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

const getSnapshotFromUserAuth = async (userAuth, additionalData) => {
    const userRef = await createUserProfileDocument(userAuth, additionalData)
    const userSnapshot = await userRef.get()
    return userSnapshot
}

export const signInWithGoogle = () => {
    return async dispatch => {
        dispatch(loadingStart());
        try {
            const { user } = await auth.signInWithPopup(provider)
            const userSnapshot = await getSnapshotFromUserAuth(user)
            dispatch(signInSuccess(userSnapshot))

        } catch (error) {
            dispatch(signInFailure(error))
        }
    }
}

export const signInWithEmail = ({ email, password }) => {
    return async dispatch => {
        dispatch(loadingStart());
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            const userSnapshot = await getSnapshotFromUserAuth(user)
            dispatch(signInSuccess(userSnapshot))
        } catch (error) {
            dispatch(signInFailure(error))
        }
    }
}

export const isUserAuthenticated = () => {
    return async dispatch => {
        dispatch(loadingStart());
        try {
            const userAuth = await getCurrentUser();
            if (!userAuth) return;
            const userSnapshot = await getSnapshotFromUserAuth(userAuth);
            dispatch(signInSuccess(userSnapshot))
        } catch (error) {
            dispatch(signInFailure(error))
        }
    }
}

export const signOut = () => {
    return async dispatch => {
        dispatch(loadingStart());
        try {
            await auth.signOut();
            dispatch(signOutSuccess())
        } catch (error) {
            dispatch(signOutFailure(error))
        }
    }
}

export const signUp = ({ email, password, displayName }) => {

    return async dispatch => {
        dispatch(loadingStart());
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            dispatch(signUpSuccess({ user, additionalData: { displayName } }));
        } catch (error) {
            dispatch(signUpFailure(error));
        }
    }
}
