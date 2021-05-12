export const initialState = {
    is_login:true,
    user_token:`${process.env.REACT_APP_USER_TOKEN}`,
    username:"yadayuki",
    email:"yada.yuki@fuji.waseda.jp",
    password:"password",
};
export default function User(state = initialState,action){
    switch(action.type){
        case "SET_USERNAME":
            return {
                ...state,
                username:action.payload.username
            };
        case "SET_PASSWORD":
            return {
                ...state,
                password:action.payload.password
            };
        case "SET_EMAIL":
            return {
                ...state,
                email:action.payload.email
            };
        default:
            return state;
    }
}