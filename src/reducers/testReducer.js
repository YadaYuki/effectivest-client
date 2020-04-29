export const initialState = {
    test:undefined,
    error:false
};
export function Test(state = initialState,action){
    switch(action.type){
        case "RECIEVE_DATA":
            return {
                ...state,test:action.payload.test
            };
        case "REQUEST_FAILED":
            return {
                ...state,error:true,
            };
        case "START_REQUEST":
            return {
                ...state,error:false,
            }
        case "ADD_TEST":
            return {
                ...state,
                test:state.test.concat(action.payload),
            }
        case "UPDATE_TEST":
            return {
                ...state,
                test:updateTest(state.test,action.payload)
            }
        case "DELETE_TEST":
            return {
                ...state,
                test:state.test.filter((test)=>{return test.test_id !== action.payload.test_id})
            }
        default:
            return state;
    }
}

function updateTest(arr,test){
    for(let i in arr){
        if (arr[i].test_id == test.test_id){
            arr[i] = test;
            break;
        }
    }
    return arr;
}