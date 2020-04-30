import axios from "./axios";
import qs from "qs";
axios.defaults.baseURL = axios.defaults.baseURL + "/question";
export function startRequest(test){
    return {
        type:"START_REQUEST",
        payload:{test},
    };
}
export function recieveQuestion(question){
    return {
        type:"RECIEVE_QUESTION",
        payload:{question}
    }
}
export function requestFailed(){
    return {
        type:"REQUEST_FAILED",
        payload:{}
    }
}
export function addQuestion(question_id,question,answer){
    return {
        type:"ADD_QUESTION",
        payload:{question_id,question,answer}
    };
}
export function updateQuestion(question_id,question,answer){
    return {
        type:"UPDATE_QUESTION",
        payload:{question_id,question,answer}
    };
}
export function deleteQuestion(question_id){
    return {
        type:"DELETE_QUESTION",
        payload:{question_id}
    }
}
export function fetchGetQuestion(test_id,testmode,question_num,is_test=true){
    return async (dispatch,getState) => {
        // get test from testreducer store
        const test = getState().Test.test.find(t=>(t.id === test_id));
        console.log(JSON.stringify(getState().Test.test));
        if(typeof test === "undefined"){
            requestFailed();
            return;
        }
        dispatch(startRequest(test));
        // fetch question from api
        try{
            const params = qs.stringify({test_id,question_num,is_test});
            const response = await axios.get(`/get/${testmode}?${params}`);
            recieveQuestion(response.data);
        }catch(err){
            requestFailed();
        }
    }
}