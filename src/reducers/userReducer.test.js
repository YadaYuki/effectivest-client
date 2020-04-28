import {initialState,userReducer} from "./userReducer";
import configureMockStore from "redux-mock-store";
import * as actions from "../actions/userAction";
const mockStore = configureMockStore();
describe("userReducer initialState",()=>{
    const initialStateTest = {
        is_login:true,
        user_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjUsImlhdCI6MTU4ODA0OTgyOX0.cd2HrzswcBh5wkDwLmEFjlGudxC4HlxG8prn4JR8ZAM",
        username:"yadayuki",
        email:"yada.yuki@fuji.waseda.jp",
        password:"password",
    };
    it("initial state should be returned",()=>{
        expect(initialState).toEqual(initialStateTest)
    });
});
describe("userReducer test",()=>{
    const initialState = {
        is_login:true,
        user_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjUsImlhdCI6MTU4ODA0OTgyOX0.cd2HrzswcBh5wkDwLmEFjlGudxC4HlxG8prn4JR8ZAM",
        username:"yadayuki",
        email:"yada.yuki@fuji.waseda.jp",
        password:"password",
    };
    it("setPassword ",()=>{
        const password = "password";
        const store = mockStore(initialState);
        const expectAction = [
            {type:"SET_PASSWORD",payload:{password}}
        ];
        store.dispatch(actions.setPassword(password));
        expect(store.getActions()).toEqual(expectAction);
    });
    it("setUsername",()=>{
        const username = "username";
        const store = mockStore(initialState);
        const expectAction = [
            {type:"SET_USERNAME",payload:{username}}
        ];
        store.dispatch(actions.setUsername(username));
        expect(store.getActions()).toEqual(expectAction);
    });
    it("setEmail",()=>{
        const email = "sample@email.com";
        const expectAction = [
            {type:"SET_EMAIL",payload:{email}}
        ];
        const store = mockStore(initialState);
        store.dispatch(actions.setEmail(email));
        expect(store.getActions()).toEqual(expectAction);
    });
});
