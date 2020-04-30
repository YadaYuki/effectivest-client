import {initialState,Result} from "./resultReducer";
import * as actions from "../actions/resultAction";
const initialStateTest = {
    test:undefined,
    results:undefined,
    error:false
};
describe("initialState Test",()=>{
    it("initial state Test",()=>{
        expect(initialState).toEqual(initialStateTest);
    });
});
describe("switch case:",()=>{
    it("START_REQUEST",()=>{
        const test =  {test_id:1,testname:"sample",description:"aaa"};
        expect(Result(initialState,actions.startRequest(test))).toEqual({...initialState,test,error:false})
    });
    it("RECIEVE_RESULT",()=>{
        const results = [{"point":10,"max_point":10,"correct_rate":1},{"point":10,"max_point":10,"correct_rate":1}];
        expect(Result(initialState,actions.recieveResult(results))).toEqual({...initialState,results});
    });
    it("REQUEST_FAILED",()=>{
        expect(Result(initialState,actions.requestFailed())).toEqual({...initialState,error:true});
    });
});