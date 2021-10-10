import customAxios, { injectInterceptor, setupInterceptor } from "./custom-axios";

class UserService {

    static signIn(idToken: String) {
        return customAxios.post('/sign-in', {
            "idToken": idToken,
        })
            .then(({ data }) => {
                console.log("JWT Token", data);
                setupInterceptor(data);
                localStorage.setItem("Authorization", data);
                return true;
            })
    }

    static getUserInfo() {
        return customAxios.get('/info').then(({ data }) => data)
    }

    static signOut() {
        injectInterceptor();
        localStorage.removeItem("Authorization");
    }

}

export default UserService;