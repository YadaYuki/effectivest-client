import * as actions from "./doTestAction";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import DoTest from "../reducers/doTestReducer";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("doTestAction Test(sync)",()=>{
    test("setTest",()=>{
        const test = {test_id:1,mode:"all",question_num:10};
        expect(actions.setTest(test)).toEqual({type:"SET_TEST",payload:{test}});
    });
    test("setTime",()=>{
        const time = 300;
        expect(actions.setTime(time)).toEqual({type:"SET_TIME",payload:{time}})
    });
    test("setTestIsStart",()=>{
        const test_is_start = true;
        expect(actions.setTestIsStart(test_is_start)).toEqual({type:"SET_TEST_IS_START",payload:{test_is_start}});
    });
    test("setTestIsFinished",()=>{
        const test_is_finished = true;
        expect(actions.setTestIsFinished(test_is_finished)).toEqual({type:"SET_TEST_IS_FINISHED",payload:{test_is_finished}});
    });
    test("setUserAns",()=>{
        const user_ans = "user_ans";
        const question_id = 1;
        expect(actions.setUserAns(question_id,user_ans)).toEqual({type:"SET_USER_ANS",payload:{user_ans,question_id}});
    });
    test("setResult",()=>{
        const point = 10;
        const max_point = 10;
        const correct_rate = point/max_point;
        const result = {point,max_point,correct_rate};
        expect(actions.setResult(point,max_point,correct_rate)).toEqual({type:"SET_RESULT",payload:{result}});
    });
    test("setResultId",()=>{
        const result_id = 2;
        expect(actions.setResultId(result_id)).toEqual({type:"SET_RESULT_ID",payload:{result_id}});
    })
    test("RequestFailed",()=>{
        expect(actions.requestFailed()).toEqual({type:"REQUEST_FAILED"});
    });
    test("setMistakes",()=>{
        const mistakes = [{result_id:1,question_id:2,question:"question",answer:"answer"},{result_id:1,question_id:2,question:"question",answer:"answer"},{result_id:1,question_id:2,question:"question",answer:"answer"},{result_id:1,question_id:2,question:"question",answer:"answer"}];
        expect(actions.setMistakes(mistakes)).toEqual({type:"SET_MISTAKES",payload:{mistakes}});
    });
    test("setQuestions",()=>{
        const questions = [{question_id:1,question:"aaa",answer:"aaa",user_ans:"aaa"},{question_id:1,question:"aaa",answer:"aaa",user_ans:"aaa"},{question_id:1,question:"aaa",answer:"aaa",user_ans:"aaa"}];
        expect(actions.setQuestions(questions)).toEqual({type:"SET_QUESTIONS",payload:{questions}});
    });
    test("setCorrects",()=>{
        const corrects = [1,2,3,4];
        expect(actions.setCorrects(corrects)).toEqual({type:"SET_CORRECTS",payload:{corrects}});
    });
});
// describe("doTestAction Test(async)",()=>{
//     test("")
// });