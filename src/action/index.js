import { auth, provider } from "../Firebase";

import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})


export function getUserAuth() {
	return (dispatch) => {
		auth.onAuthStateChanged(async (user) => {
			if(user) {
				dispatch(setUser(user));
			}
	});
	};
}

export function signInAPI() {
    return (dispath) => {
        auth.signInWithPopup(provider)
        .then((payload) => {
            dispath(setUser(payload.user))
            .catch((err) => {
                alert(err.message)
            })
        })
    }
}
