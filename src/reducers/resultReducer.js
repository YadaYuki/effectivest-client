export const initialState = {
    test_id:undefined,
    results:undefined,
    error:false,
}
export default function Result(state = initialState,action){
    switch(action.type){
        case "START_REQUEST":
            return {
                ...state,test_id:action.payload.test_id,error:false
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