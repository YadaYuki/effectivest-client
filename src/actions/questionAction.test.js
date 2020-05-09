import * as actions from "./questionAction";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);
describe("questionAction Test(sync)",()=>{
    it("startRequest",()=>{
        // const test = {test_id:1,testname:"sample",description:"sample,sample"};
        expect(actions.startRequest(test_id)).toEqual({type:"START_REQUEST",payload:{test_id}});
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
var user_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE1ODgwNTcwMzV9.VThifnlBFc8WAf8AAVMksoiBVL7ADvT26FK8CrG9t3M";
var test = [{test_id:3,testname:"testname",description:"description"},{test_id:4,testname:"testname",description:"description"}];
describe("questionAction Test(async)",()=>{
    var add_question_id; 
    it("fetchAddQuestion",()=>{
        const test_id = 1,question="sample",answer="サンプル";
        const store = mockStore({User:{user_token},Question:{test_id}});
        return store.dispatch(actions.fetchAddQuestion(question,answer)).then(()=>{
            // expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("ADD_QUESTION");
            add_question_id = store.getActions()[1].payload.question_id;
        });
    });
    it("fetchAddQuestion failed",()=>{
        const test_id = 1,question="sample",answer="サンプル";
        const store = mockStore({User:{},Question:{test_id}});
        return store.dispatch(actions.fetchAddQuestion(test_id,question,answer)).then(()=>{
            // expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("REQUEST_FAILED");
        });
    });
    it("fetchUpdateQuestion",()=>{
        const question_id = 1,question="sample",answer="サンプル";
        const store = mockStore({User:{user_token}});
        return store.dispatch(actions.fetchUpdateQuestion(question_id ,question,answer)).then(()=>{
            // expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[0].type).toEqual("UPDATE_QUESTION");
        });
    });
    it("fetchUppdateQuestion failed",()=>{
        const question_id = 1,question="sample",answer="サンプル";
        const store = mockStore({User:{}});
        return store.dispatch(actions.fetchUpdateQuestion(question_id,question,answer)).then(()=>{
            // expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[0].type).toEqual("REQUEST_FAILED");
        });
    });
    it("fetchDeleteQuestion",()=>{
        const store = mockStore({User:{user_token}});
        return store.dispatch(actions.fetchDeleteQuestion(add_question_id)).then(()=>{
            expect(store.getActions()[0].type).toEqual("DELETE_QUESTION");
        });
    });
    it("fetchDeleteQuestion Failed",()=>{
        const store = mockStore({User:{}});
        return store.dispatch(actions.fetchDeleteQuestion(add_question_id)).then(()=>{
            expect(store.getActions()[0].type).toEqual("REQUEST_FAILED");
        });
    });
    it("fetchUpdateCorrectRate Failed",()=>{
        const store = mockStore({User:{}});
        const question_id_arr = [1,2,3,4,5,6];
        return store.dispatch(actions.fetchUpdateCorrectRate(question_id_arr)).then(()=>{
            expect(store.getActions()[0].type).toEqual("REQUEST_FAILED");
        });
    });
    it("fetchGetAllQuestion All",()=>{
        const store = mockStore({User:{},Test:{test}});
        const test_id = 1
        // get question all
        return store.dispatch(actions.fetchGetAllQuestion(test_id)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("RECIEVE_QUESTION");
        });
    });
    it("fetchGetQuestion All",()=>{
        const store = mockStore({User:{},Test:{test}});
        const test_id=1,mode="all";
        return store.dispatch(actions.fetchGetQuestion(test_id,mode)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("RECIEVE_QUESTION");
        });
    });
    it("fetchGetQuestion random",()=>{
        const store = mockStore({User:{},Test:{test}});
        const test_id=1,mode="random",question_num=10;
        return store.dispatch(actions.fetchGetQuestion(test_id,mode,question_num)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("RECIEVE_QUESTION");
            expect(store.getActions()[1].payload.question.length).toEqual(question_num);
        });
    });
    it("fetchGetQuestion week",()=>{
        const store = mockStore({User:{},Test:{test}});
        const test_id=1,mode="week",question_num=10;
        return store.dispatch(actions.fetchGetQuestion(test_id,mode,question_num)).then(()=>{
            expect(store.getActions()[0].type).toEqual("START_REQUEST");
            expect(store.getActions()[1].type).toEqual("RECIEVE_QUESTION");
            expect(store.getActions()[1].payload.question.length).toEqual(question_num);
        });
    });
});