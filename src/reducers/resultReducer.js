import { bindActionCreators } from "redux";

export const initialState = {
    test:undefined,
    results:undefined,
    error:false,
}
export function Result(state = initialState,action){
    switch(action.type){
        case "START_REQUEST":
            return {
                ...state,test:action.payload.test,error:false
            };
        case "RECIEVE_RESULT":
            return {
                ...state,results:action.payload.results,
            }
        case "REQUEST_FAILED":
            return {
                ...state,error:true
            }
        default:
            return state;
    }
}