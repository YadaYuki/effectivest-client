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
        const test_id=1;
        const testname="testname"
        const description="description"
        expect(actions.addTest(test_id,testname,description)).toEqual({type:"ADD_TEST",payload:{test_id,testname,description}});
    });
    test("updateTest",()=>{
        const test_id=1
        const testname="testname"
        const description="description"
        expect(actions.updateTest(test_id,testname,description)).toEqual({type:"UPDATE_TEST",payload:{test_id,testname,description}});
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
    var test_id;
    test("fetchAddTest",()=>{
        const store = mockStore({User:{user_token},Test:{}});
        const testname = "sampleTest";
        const description = "testtest";
        return store.dispatch(actions.fetchAddTest(testname,description)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("ADD_TEST");
            console.log(JSON.stringify(store.getActions()));
            test_id = store.getActions()[1].payload.test_id;
        });
    });
    test("fetchAddTest Failed",()=>{
        const store = mockStore({User:{},Test:{}});
        const testname = "sampleTest";
        const description = "testtest";
        return store.dispatch(actions.fetchAddTest(testname,description)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("REQUEST_FAILED");
        });
    });
    test("fetchUpdateTest",()=>{
        const store = mockStore({User:{user_token},Test:{}});
        const test_id = 1;
        const testname = "test";
        const description = "testtest";
        return store.dispatch(actions.fetchUpdateTest(test_id,testname,description)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("UPDATE_TEST");
        });
    });
    test("fetchUpdateTest failed",()=>{
        const store = mockStore({User:{},Test:{}});
        const test_id = 1;
        const testname = "test";
        const description = "testtest";
        return store.dispatch(actions.fetchUpdateTest(test_id,testname,description)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("REQUEST_FAILED");
        });
    });
    test("fetchDeleteTest",()=>{
        const store = mockStore({User:{user_token},Test:{}});
        return store.dispatch(actions.fetchDeleteTest(test_id)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("DELETE_TEST");
        });
    });
    test("fetchDeleteTest Failed",()=>{
        const store = mockStore({User:{},Test:{}});
        const test_id = 1;
        return store.dispatch(actions.fetchDeleteTest(test_id)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("REQUEST_FAILED");
        });
    });
});