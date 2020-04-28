import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./userAction";
import axios from "axios";
const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
var initialState = {
    is_login: false,
    user_token: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    password_again: undefined,
    error: false,
};
describe("userAction test", () => {
    test("setUsername", () => {
        const username = "sampleuser";
        expect(actions.setUsername(username)).toEqual({ type: "SET_USERNAME", payload: { username } });
    });
    test("setPassword", () => {
        const password = "password";
        expect(actions.setPassword(password)).toEqual({ type: "SET_PASSWORD", payload: { password } });
    });
    test("setEmail", () => {
        const email = "sample@aaaa";
        expect(actions.setEmail(email)).toEqual({ type: "SET_EMAIL", payload: { email } });
    });
    test("loginSuccess", () => {
        const user_token = "sample";
        expect(actions.loginSuccess(user_token)).toEqual({ type: "LOGIN_SUCCESS", payload: { user_token } });
    });
    test("loginFailed", () => {
        expect(actions.loginFailed()).toEqual({ type: "LOGIN_FAILED", payload: undefined });
    });
    // write code for get user_token

    test("fetchLogin Success", () => {
        const username = "yadayuki";
        const password = "password";
        const store = mockStore(initialState);
        return store.dispatch(actions.fetchLogin(username, password)).then(() => {
            expect(store.getActions()[0].type).toEqual(actions.loginSuccess().type);
        });
    });
    test("fetchLogin Failed", () => {
        const username = "yadayuki";
        const password = "mistake";
        const store = mockStore({});
        return store.dispatch(actions.fetchLogin(username, password)).then(() => {
            expect(store.getActions()[0].type).toEqual("LOGIN_FAILED");
        });
    });

    var user_token;
    test("fetchRegist success", () => {
        const username = "yadayuki1";
        const email = "email";
        const password = "password";
        const store = mockStore({});
        return store.dispatch(actions.fetchRegist(username, email, password)).then(() => {
            expect(store.getActions()[0].type).toEqual("LOGIN_SUCCESS");
            user_token = store.getActions()[0].payload.user_token;
        });
    });
    test("fetchRegist Failed", () => {
        const username = "yadayuki";
        const email = "email";
        const password = "password";
        const store = mockStore({});
        return store.dispatch(actions.fetchRegist(username, email, password)).then(() => {
            expect(store.getActions()[0].type).toEqual("LOGIN_FAILED");
        });
    });
    test("fetchUserInfo ", async () => {
        const store = mockStore({ ...initialState, user_token });
        return store.dispatch(actions.fetchUserInfo()).then(() => {
            expect(store.getActions()[0].type).toEqual("SET_EMAIL");
            expect(store.getActions()[1].type).toEqual("SET_USERNAME");
        });
    });
    test("fetchUpdatePassword Success", () => {
        const password = "password";
        const new_password = "password";
        const expectedActions = [
            { type: "SET_PASSWORD", payload: { password } }
        ];
        const store = mockStore({ ...initialState, user_token });
        return store.dispatch(actions.fetchUpdatePassword(password, new_password)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    test("fetchUpdatePassword Error", () => {
        const password = "mistake";
        const new_password = "password";
        const expectedActions = [];
        const store = mockStore({ ...initialState, user_token });
        return store.dispatch(actions.fetchUpdatePassword(password, new_password)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    test("fetchUpdateUser ", () => {
        const username = "yadayuki1";
        const email = "updated@email.com";
        const store = mockStore({ ...initialState, user_token });
        const expectedActions = [
            { type: "SET_USERNAME", payload: { username } }, { type: "SET_EMAIL", payload: { email } }
        ];
        return store.dispatch(actions.fetchUpdateUser(username, email)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    test("fetchUpdateUser Failure", () => {
        const username = "yadayuki1";
        const email = "updated@email.com";
        const store = mockStore(initialState);
        const expectedActions = [];
        return store.dispatch(actions.fetchUpdateUser(username, email)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    
});