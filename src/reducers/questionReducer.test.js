import Question,{initialState} from "./questionReducer";
import * as actions from "../actions/questionAction";
describe("switch case:",()=>{
    const questions = [{question_id:1,question:"question",answer:"answer"},{question_id:2,question:"question",answer:"answer"},{question_id:3,question:"question",answer:"answer"}];
    it("RECIEVE_TEST",()=>{
        expect(Question(initialState,actions.recieveQuestion(questions))).toEqual({...initialState,questions});
    });
    it("START_REQUEST",()=>{
        // const test = {test_id:1,test:"sample",description:"111"};
        expect(Question(initialState,actions.startRequest(test_id))).toEqual({...initialState,test_id,error:false});
    });
    it("REQUEST_FAILED",()=>{
        expect(Question(initialState,actions.requestFailed())).toEqual({...initialState,error:true});
    });
    it("UPDATE_QUESTION",()=>{
        const question_id = 1,question = "what is your dream?",answer="not engineer";
        const update = [{question_id:1,question:"what is your dream?",answer:"not engineer"},{question_id:2,question:"question",answer:"answer"},{question_id:3,question:"question",answer:"answer"}];
        expect(Question({...initialState,questions},actions.updateQuestion(question_id,question,answer))).toEqual({...initialState,questions:update});
    });
    it("ADD_QUESTION",()=>{
        const question_id = 3,question = "aaa",answer="aaa";
        const added = [{question_id:1,question:"question",answer:"answer"},{question_id:2,question:"question",answer:"answer"},{question_id:3,question:"question",answer:"answer"},{question_id,question,answer}];
        expect(Question({...initialState,questions},actions.addQuestion(question_id,question,answer))).toEqual({...initialState,questions:added});
    });
    it("DELETE_QUESTION",()=>{
        const question_id = 2;
        const deleted =  [{question_id:1,question:"question",answer:"answer"},{question_id:3,question:"question",answer:"answer"}];
        expect(Question({...initialState,questions},actions.deleteQuestion(question_id))).toEqual({...initialState,questions:deleted});
    });
});
