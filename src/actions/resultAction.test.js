import * as actions from "./resultAction";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("resultAction Test(sync)",()=>{
    test("startRequest",()=>{
       const test = {test_id:1,testname:"sample",description:"aaa"};
       expect(actions.startRequest(test)).toEqual({type:"START_REQUEST",payload:{test}});
    });
    test("recieveResult",()=>{
        const results = [{point:10,max_point:10,correct_rate:1},{point:10,max_point:10,correct_rate:1},{point:10,max_point:10,correct_rate:1}];
        expect(actions.recieveResult(results)).toEqual({type:"RECIEVE_RESULT",payload:{results}});
    });
    test("requestFailed",()=>{
        expect(actions.requestFailed()).toEqual({type:"REQUEST_FAILED",payload:{}});
    });
});
var user_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE1ODgwNTcwMzV9.VThifnlBFc8WAf8AAVMksoiBVL7ADvT26FK8CrG9t3M";
var tests = [{test_id:1,testname:"testname",description:"description"},{test_id:2,testname:"testname",description:"description"}];
describe("resultAction Test(async)",()=>{
    test("fetchGetResult",()=>{
        const test_id = 1;
        const store = mockStore({Test:{tests}});
        return store.dispatch(actions.fetchGetResult(test_id)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("RECIEVE_RESULT");
        });
    });
    test("fetchAddResult",()=>{
        const point=10,max_point=10;
        const store = mockStore({Result:{test:{test_id:1}},User:{user_token}});
        return store.dispatch(actions.fetchAddResult(point,max_point)).then(()=>{
        });
    });
})