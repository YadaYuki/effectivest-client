import * as actions from "./testAction";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe("testAction Test(sync)",()=>{
    test("startRequest",()=>{
        expect(actions.startRequest()).toEqual({type:"START_REQUEST",payload:{}});
    });
    test("recieveTest",()=>{
        const test = [{test_id:1,testname:"testname",description:"description"},{test_id:2,testname:"testname",description:"description"}]
        expect(actions.recieveTest(test)).toEqual({type:"RECIEVE_TEST",payload:{test}});
    });
    test("requestFailed",()=>{
        expect(actions.requestFailed()).toEqual({type:"REQUEST_FAILED",payload:{}})
    });
    test("addTest",()=>{
        const test = {test_id:1,testname:"testname",description:"description"};
        expect(actions.addTest(test)).toEqual({type:"ADD_TEST",payload:{test}});
    });
    test("updateTest",()=>{
        const test = {test_id:1,testname:"testname",description:"description"};
        expect(actions.updateTest(test)).toEqual({type:"UPDATE_TEST",payload:{test}});
    });
    test("deleteTest",()=>{
        const test_id = 1;
        expect(actions.deleteTest(test_id)).toEqual({type:"DELETE_TEST",payload:{test_id}});
    }); 
});
var user_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE1ODgwNTcwMzV9.VThifnlBFc8WAf8AAVMksoiBVL7ADvT26FK8CrG9t3M";
describe("testAction test (async)",()=>{
    test("fetchGetTest",()=>{
        const store = mockStore({User:{user_token},Test:{}});
        return store.dispatch(actions.fetchGetTest()).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("RECIEVE_TEST");
        });
    });
    test("fetchGetTest Failed",()=>{
        const store = mockStore({User:{},Test:{}});
        return store.dispatch(actions.fetchGetTest(user_token)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("REQUEST_FAILED");
        });
    });
});