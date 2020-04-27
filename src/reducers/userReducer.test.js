import {initialState} from "./userReducer";

describe("userReducer initialState",()=>{
    const initialStateTest = {
        is_login:false,
        user_token:undefined,
        username:undefined,
        email:undefined,
        password:undefined,
        password_again:undefined,
    };
    it("initial state should be returned",()=>{
        expect(initialState).toEqual(initialStateTest)
    });
});
