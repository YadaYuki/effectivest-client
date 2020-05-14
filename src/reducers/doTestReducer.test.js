import DoTest, { initialState } from "./doTestReducer";
import * as actions from "../actions/doTestAction";
describe("switch case", () => {
    it("SET_TEST", () => {
        const test = { test_id: 1, question_num: 10, mode: "all" };
        expect(DoTest(initialState, actions.setTest(test))).toEqual({ ...initialState, test });
    });
    it("SET_TIME", () => {
        const time = 100;
        expect(DoTest(initialState, actions.setTime(time))).toEqual({ ...initialState, time })
    });
    it("SET_TEST_IS_DOING", () => {
        const test_is_doing = true;
        expect(DoTest(initialState, actions.setTestIsDoing(test_is_doing))).toEqual({ ...initialState, test_is_doing });
    });
    it("SET_USER_ANS", () => {
        const user_ans = "ans", question_id = 1;
        const state = { ...initialState, questions: [{ question: "aaa", answer: "aaa", user_ans: "", question_id: 1 }, { question: "aaa", answer: "aaa", user_ans: "", question_id: 2 }] };
        expect(DoTest(state, actions.setUserAns(question_id, user_ans))).toEqual({ ...initialState, questions: [{ question: "aaa", answer: "aaa", user_ans: "ans", question_id: 1 }, { question: "aaa", answer: "aaa", user_ans: "", question_id: 2 }] })
    });
    it("SET_RESULT", () => {
        const point = 10, max_point = 10, correct_rate = point / max_point;
        expect(DoTest(initialState, actions.setResult(point, max_point, correct_rate))).toEqual({ ...initialState, result: { point, max_point, correct_rate } });
    });
    it("REQUEST_FAILED", () => {
        expect(DoTest(initialState, actions.requestFailed())).toEqual({ ...initialState, error: true });
    });
    it("SET_MISTAKES",()=>{
        const mistakes = [{result_id:1,question_id:2,question:"question",answer:"answer"},{result_id:1,question_id:2,question:"question",answer:"answer"},{result_id:1,question_id:2,question:"question",answer:"answer"},{result_id:1,question_id:2,question:"question",answer:"answer"}];
        expect(DoTest(initialState,actions.setMistakes(mistakes))).toEqual({...initialState,mistakes:mistakes});
    });
    it("SET_CORRECTS",()=>{
        const corrects = [1,2,3,4];
        expect(DoTest(initialState,actions.setCorrects(corrects))).toEqual({...initialState,corrects:corrects});
    });
    it("SET_RESULT_ID",()=>{
        const result_id = 1;
        expect(DoTest(initialState,actions.setResultId(result_id))).toEqual({...initialState,result_id:result_id});
    });
    it("SET_QUESTIONS",()=>{
        const questions = [{question_id:1,question:"aaa",answer:"aaa",user_ans:"aaa"},{question_id:1,question:"aaa",answer:"aaa",user_ans:"aaa"},{question_id:1,question:"aaa",answer:"aaa",user_ans:"aaa"}];
        expect(DoTest(initialState,actions.setQuestions(questions))).toEqual({...initialState,questions:questions});
    });
});
