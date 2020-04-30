import * as actions from "./questionAction";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
describe("questionAction Test(sync)",()=>{
    it("startRequest",()=>{
        const test = {test_id:1,testname:"sample",description:"sample,sample"};
        expect(actions.startRequest(test)).toEqual({type:"START_REQUEST",payload:{test}});
    });
    it("recieveQuestion",()=>{
        const question = [{question_id:1,question:"sample",answer:"sampleans"},{question_id:1,question:"sample",answer:"sampleans"},{question_id:1,question:"sample",answer:"sampleans"}];
        expect(actions.recieveQuestion(question)).toEqual({type:"RECIEVE_QUESTION",payload:{question}});
    });
    it("requestFailed",()=>{
        expect(actions.requestFailed()).toEqual({type:"REQUEST_FAILED",payload:{}});
    });
    it("addQuestion",()=>{
        const question = "sample",answer="sample",question_id=1;
        expect(actions.addQuestion(question_id,question,answer)).toEqual({type:"ADD_QUESTION",payload:{question_id,question,answer}});
    });
    it("updateQuestion",()=>{
        const question = "sample",answer="sample",question_id=1;
        expect(actions.updateQuestion(question_id,question,answer)).toEqual({type:"UPDATE_QUESTION",payload:{question_id,question,answer}});
    });
    it("deleteQuestion",()=>{
        const question_id = 1;
        expect(actions.deleteQuestion(question_id)).toEqual({type:"DELETE_QUESTION",payload:{question_id}});
    });
});
describe("questionAction Test(async)",()=>{
    it("fetchGetQuestion all",()=>{
        const test_id=3, testmode = "all",question_num = 5;
        const store = mockStore({Test: {test:[{test_id:3,testname:"testname",description:"description"},{test_id:4,testname:"testname",description:"description"}]}});
        return store.dispatch(actions.fetchGetQuestion(test_id,testmode,question_num)).then(()=>{
            expect(store.getActions()[0]).toEqual({type:"START_REQUEST",payload:{test_id:test_id,testname:"testname",description:"description"}});
            expect(store.getActions()[1].type).toEqual("RECIEVE_QUESTION");
        });
    });
    it("fetchGetQuestion random",()=>{
        const test_id=3, testmode = "random",question_num = 5;
        const store = mockStore({Test:{test: [{test_id:3,testname:"testname",description:"description"},{test_id:4,testname:"testname",description:"description"}]}});
        return store.dispatch(actions.fetchGetQuestion(test_id,testmode,question_num)).then(()=>{
            expect(store.getActions()[0]).toEqual({type:"START_REQUEST",payload:{test_id:test_id,testname:"testname",description:"description"}});
            expect(store.getActions()[1].type).toEqual("RECIEVE_QUESTION");
            expect(store.getActions()[1].payload.question.length).toEqual(question_num);
        });
    });
    it("fetchGetQuestion week",()=>{
        const test_id=3, testmode = "week",question_num = 5;
        const store = mockStore({Test:{test: [{test_id:3,testname:"testname",description:"description"},{test_id:4,testname:"testname",description:"description"}]}});
        return store.dispatch(actions.fetchGetQuestion(test_id,testmode,question_num)).then(()=>{
            expect(store.getActions()[0]).toEqual({type:"START_REQUEST",payload:{test_id:test_id,testname:"testname",description:"description"}});
            expect(store.getActions()[1].type).toEqual("RECIEVE_QUESTION");
            expect(store.getActions()[1].payload.question.length).toEqual(question_num);
        });
    });

});