export const inputUsername = (username) => ({
    type:"INPUT_USERNAME",
    payload:{username},
});
export const inputPassword = (password) => ({
    type:"INPUT_PASSWORD",
    payload:{password},
})
export const inputEmail = (email) => ({
    type:"INPUT_EMAIL",
    payload:{email},
});
export const loginSuccess = (user_token) => ({
    type:"LOGIN_SUCCESS",
    payload:{user_token}
});
export const loginFailed = () => ({
    type:"LOGIN_FAILED",
    payload:undefined
});
export const 