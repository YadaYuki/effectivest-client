import * as actions from "./mistakeAction";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("mistakeAction Test(sync)",()=>{
    test("addMistake",()=>{
        const mistake = {result_id:1,test_id:1};
        expect(actions.addMistake(mistake)).toEqual({type:"ADD_MISTAKE",payload:{mistake}});
    });
});
var user_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE1ODgwNTcwMzV9.VThifnlBFc8WAf8AAVMksoiBVL7ADvT26FK8CrG9t3M";
describe("mistakeAction Test(async)",()=>{
    test("fetchAddMistake",()=>{
        const mistakes = [{result_id:1,question_id:1},{result_id:1,question_id:1}];
        const store = mockStore({User:{user_token},Mistake:{mistakes}});
        return store.dispatch(actions.fetchAddMistake()).then(()=>{
        });
    });
});