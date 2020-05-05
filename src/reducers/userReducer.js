export const initialState = {
    is_login:true,
    user_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjUsImlhdCI6MTU4ODA0OTgyOX0.cd2HrzswcBh5wkDwLmEFjlGudxC4HlxG8prn4JR8ZAM",
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