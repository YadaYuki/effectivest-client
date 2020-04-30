import axios from "./axios";
import qs from "qs";
axios.defaults.baseURL = axios.defaults.baseURL + "/question";
export function startRequest(test){
    return {
        type:"START_REQUEST",
        payload:{test},
    };
}
export function recieveQuestion(questions){
    return {
        type:"RECIEVE_QUESTION",
        payload:{questions}
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

export function fetchAddQuestion(test_id,question,answer){
    return async(dispatch,getState)=>{
        //find test by id
        const test_arr = getState().Test.test;
        const test = test_arr.find((test)=>{return test.test_id === test_id});
        dispatch(startRequest(test));
        try{
            const user_token = getState().User.user_token;
            const response = await axios.post("/add",{test_id,question,answer,user_token});
            const question_id = response.data.question_id;
            if(question_id){
                dispatch(addQuestion(question_id,question,answer));
            }
        }catch(err){
            dispatch(requestFailed());
        }
    };
};

export function fetchUpdateQuestion(question_id,question,answer){
    return async(dispatch,getState)=>{
        try{
            const user_token = getState().User.user_token;
            const response = await axios.put("/update",{user_token,question_id,question,answer});
            if(response.data.is_updated === true){
                dispatch(updateQuestion(question_id,question,answer));
            }else{
                dispatch(requestFailed());
            }
        }catch(err){
            dispatch(requestFailed());     
   }
    }
}
export function fetchDeleteQuestion(question_id){
    return async(dispatch,getState)=>{
        try{
            const user_token = getState().User.user_token;
            const response = await axios.delete("/delete",{data:{user_token,question_id}});
            if(response.data.is_deleted === true){
                dispatch(deleteQuestion(question_id));
            }else{
                dispatch(requestFailed());
            }
        }catch(err){
            dispatch(requestFailed());
        }
    }
}
export function fetchUpdateCorrectRate(question_id_arr){
    return async(dispatch,getState)=>{
        try{
            const user_token = getState().User.user_token;
            const response = await axios.put("/update/correct_time",{user_token,question_id:question_id_arr});
            if(response.data.is_updated === true){

            }else{
                dispatch(requestFailed());
            }
        }catch(err){
            dispatch(requestFailed());
        }
    }
}
export function fetchGetAllQuestion(test_id){
    return async(dispatch,getState)=>{
        const test_arr = getState().Test.test;
        const test = test_arr.find((test)=>{return test.test_id === test_id});
        dispatch(startRequest(test));
        try{
            const params = qs.stringify({test_id,is_test:false});
            const response = await axios.get(`/get/all?${params}`);
            dispatch(recieveQuestion(response.data.question));
            // const response 
        }catch(err){
            console.log(err);
            dispatch(requestFailed());
        }
    }
}
export function fetchGetQuestion(test_id,mode,question_num){
    return async(dispatch,getState)=>{
        const test_arr = getState().Test.test;
        const test = test_arr.find((test)=>{return test.test_id === test_id});
        dispatch(startRequest(test));
        try{
            const params = qs.stringify({test_id,is_test:true,question_num});
            const response = await axios.get(`/get/${mode}/?${params}`);
            dispatch(recieveQuestion(response.data));
        }catch(err){
            console.log(err);
            dispatch(requestFailed());
        }
    }
}