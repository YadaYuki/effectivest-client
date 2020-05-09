import baseURL from "./baseURL";
import qs from "qs";
import axios from "axios";
import {push} from "connected-react-router";
axios.defaults.baseURL = baseURL  + "/test";
export function startRequest() {
    return {
        type: "START_REQUEST",
        payload: {}
    };
};
export function recieveTest(test) {
    return {
        type: "RECIEVE_TEST",
        payload: { test }
    };
}
export function requestFailed() {
    return {
        type: "REQUEST_FAILED",
        payload: {}
    };
};
export function addTest(test_id,testname,description) {
    return {
        type: "ADD_TEST",
        payload: { test_id,testname,description}
    };
};
export function updateTest(test_id,testname,description) {
    return {
        type: "UPDATE_TEST",
        payload: { test_id,testname,description }
    }
}
export function deleteTest(test_id) {
    return {
        type: "DELETE_TEST",
        payload: { test_id }
    };
};

export function fetchGetTest() {
    return async (dispatch, getState) => {
        dispatch(startRequest());
        try {
            const user_token = getState().User.user_token;
            const params = qs.stringify({ user_token });
            const response = await axios.get(`/get/all?${params}`);
            const data = response.data;
            if (data.length) {
                dispatch(recieveTest(data));
            }else{
                dispatch(requestFailed());
            }
        } catch (err) {
            dispatch(requestFailed());
        }
    }
}
export function fetchAddTest(testname,description){
    return async(dispatch,getState)=>{
        dispatch(startRequest());
        try{
            const user_token = getState().User.user_token;
            const response = await axios.post("/add",{testname,description,user_token});
            const test_id = response.data.test_id;
            if(test_id){//if not undefined 
                dispatch(addTest(test_id,testname,description));
                //redirect 
                const params = qs.stringify({test_id,testname}) 
                dispatch(push(`/edit_test?${params}`));
            }else{
                dispatch(requestFailed());
            }
            
        }catch(err){
            dispatch(requestFailed());
        }
    }
}
export function fetchUpdateTest(test_id,testname,description){
    return async(dispatch,getState)=>{
        dispatch(startRequest());
        try{
            const user_token = getState().User.user_token;
            const response = await axios.put("/update",{user_token,test_id,testname,description});
            if(response.data.is_updated === true){
                dispatch(updateTest({test_id,testname,description}));
            }else{
                dispatch(requestFailed());
            }
        }catch(err){
            dispatch(requestFailed());
        }
    }
}
export function fetchDeleteTest(test_id){
    return async(dispatch,getState)=>{
        dispatch(startRequest());
        try{
            const user_token = getState().User.user_token;
            const response = await axios.delete("/delete",{data:{user_token,test_id}});
            if(response.data.is_deleted){
                dispatch(deleteTest(test_id));
            }else{
                dispatch(requestFailed());
            }
        }catch(err){
            dispatch(requestFailed());
        }
    }
}