import baseURL from "./baseURL";
import qs from "qs";
import axios from "axios";
const URL = baseURL  + "/result";
export function startRequest(test_id){
    return {
        type:"START_REQUEST",
        payload:{test_id},
    };
};
export function recieveResult(results){
    return {
        type:"RECIEVE_RESULT",
        payload:{results},
    };
};
export function requestFailed(){
    return {
        type:"REQUEST_FAILED",
        payload:{}
    }
}
export function fetchGetResult(test_id){
    return async(dispatch,getState)=>{
        dispatch(startRequest(test_id));
        try{
            const params = qs.stringify({test_id});
            const response = await axios.get(`${URL}/get?${params}`);
            dispatch(recieveResult(response.data));
        }catch(err){
            console.log(err);
            dispatch(requestFailed());
        }
    }
}
export function fetchAddResult(point,max_point){
    return async(dispatch,getState)=>{
        const test_id = getState().Result.test_id;
        const user_token = getState().User.user_token;
        try{
            const response = await axios.post(`${URL}/add`,{point,max_point,correct_rate:(point/max_point),user_token,test_id});
            if(response.data.is_result === true){

            }else{
                dispatch(requestFailed());
            }
        }catch(err){
            console.log(err);
            dispatch(requestFailed());
        }
    }
}