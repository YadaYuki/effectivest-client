import {initialState,Test} from "./testReducer";
import * as actions from "../actions/testAction";
const initialStateTest = {
    test:undefined,
    error:false
};
describe("testReducer initialState test",()=>{
    it("initialState",()=>{
        expect(initialStateTest).toEqual(initialState);
    });
});
describe("switch case:",()=>{
    it("RECIEVE_TEST",()=>{
        const test = [{test_id:1,testname:"testname",description:"description"},{test_id:2,testname:"testname",description:"description"}];
        expect(Test(initialStateTest,actions.recieveTest(test))).toEqual({test:test,...initialStateTest});
    });
    it("START_REQUEST",()=>{
        expect(Test({...initialStateTest,error:true},actions.startRequest())).toEqual({...initialStateTest,error:false});
    });
    it("REQUEST_FAILED",()=>{
        expect(Test(initialStateTest,actions.requestFailed())).toEqual({...initialStateTest,error:true});
    });
    it("ADD_TEST",()=>{
        const testname = "sample",test_id=3,description="サンプルです";
        const test =  [{test_id:1,testname:"testname",description:"description"},{test_id:2,testname:"testname",description:"description"}];
        expect(Test({...initialStateTest,test:test},actions.addTest(test_id,testname,description))).toEqual({...initialStateTest,test:test.concat({test_id,testname,description})})
    });
    it("UPDATE_TEST",()=>{
        const test =  [{test_id:1,testname:"testname",description:"description"},{test_id:2,testname:"testname",description:"description"}];
        const testname = "sample",test_id=2,description="サンプルです";
        const updated = [{test_id:1,testname:"testname",description:"description"},{test_id:2,testname:"sample",description:"サンプルです"}];
        expect(Test({...initialStateTest,test:test},actions.updateTest(test_id,testname,description))).toEqual({...initialStateTest,test:updated});
    });
    it("DELETE_TEST",()=>{
        const test =  [{test_id:1,testname:"testname",description:"description"},{test_id:2,testname:"testname",description:"description"}];
        const test_id=2;
        const deleted = [{test_id:1,testname:"testname",description:"description"}];
        expect(Test({...initialStateTest,test:test},actions.deleteTest(test_id))).toEqual({...initialStateTest,test:deleted});
    });
});