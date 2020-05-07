export const initialState = {
    is_login:true,
    user_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE1ODg4MTMwMTh9.NtqNHCT14qBJYmpECXudeMUxvwR3j30G7FR4HP68O9M",
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