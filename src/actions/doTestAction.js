import baseURL from "./baseURL";
import axios from "axios";
import { connect } from "react-redux";

export function setTest(test){
    return {
        type:"SET_TEST",
        payload:{test},
    };
};
export function setTime(time){
    return {
        type:"SET_TIME",
        payload:{time},
    };
};
export function setTestIsDoing(test_is_doing){
    return {
        type:"SET_TEST_IS_DOING",
        payload:{test_is_doing},
    };
};
export function setUserAns(question_id,user_ans){
    return {
        type:"SET_USER_ANS",
        payload:{question_id,user_ans},
    };
};
export function setResult(point,max_point,correct_rate){
    const result = {point,max_point,correct_rate};
    return {
        type:"SET_RESULT",
        payload:{result}
    };
}
export function requestFailed(){
    return {
        type:"REQUEST_FAILED"
    };
}
export function setMistakes(mistakes){
    return { 
        type:"SET_MISTAKES",
        payload:{mistakes}
    };
};
export function setResultId(result_id){
    return {
        type:"SET_RESULT_ID",
        payload:{result_id}
    };
};
export function setQuestions(questions){
    return {
        type:"SET_QUESTIONS",
        payload:{questions},
    };
};
export function fetchUpdateCorrectTime(question_id_arr){
    return async(dispatch,getState)=>{
        try{
            const user_token = getState().User.user_token;
            const response = await axios.put(`${URL}/update/correct_time`,{user_token,question_id:question_id_arr});
            if(response.data.is_updated === true){

            }else{
                dispatch(requestFailed());
            }
        }catch(err){
            dispatch(requestFailed());
        }
    }
}
export function fetchGetQuestions(){
    return async(dispatch,getState)=>{
        try{
            const {test_id,mode,question_num} = getState().DoTest.test;
            const params = qs.stringify({test_id,is_test:true,question_num});
            const response = await axios.get(`${URL}/questions/get/${mode}/?${params}`);
            const questions = response.data;
            for (question of questions){
                question["user_ans"] = "";
            }
            dispatch(setQuestions(questions));
        }catch(err){
            console.log(err);
            dispatch(requestFailed());
        }
    }
}
export function fetchAddResult(){
    return async(dispatch,getState) => {
        try{
            const {test_id} = getState().DoTest.test;
            const user_token = getState().User.user_token;
            const {point,max_point,correct_rate} = getState().DoTest.result;
            const response = await axios.post(`${URL}/result/add`,data={test_id,user_token,point,max_point,correct_rate});
            const {result_id,is_resulted} = response.data;
            if(is_resulted === true){
                dispatch(setResultId(result_id));
            }else{
                dispatch(requestFailed());
            };
        }catch(err){
            console.log(err);
            dispatch(requestFailed());
        }
    }
}
export function scoring(){
    return async(dispatch,getState)=>{
        const questions = getState.DoTest.questions;
        const scoreAndMistakes = getPoint(questions);
        //mistakes
        const {point,mistakes} = scoreAndMistakes;
        dispatch(setMistakes(mistakes));
        // results
        const max_point = getState.DoTest.questions.length;
        const correct_rate = point/max_point;
        dispatch(setResult(point,max_point,correct_rate));
    }
}

const getPoint = (questions) => {
    var mistakes = [];
    let point = 0;
    for (let question of questions) {
        if (question.answer != question.user_ans) {
            mistakes.push({question_id:question.question_id,question:question.question,answer:question.answer});
        } else {
            point++;
        }
    }
    return { point: point, mistakes: mistakes };
};
