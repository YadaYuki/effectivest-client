export const initialState = {
    test:undefined,
    error:false
};
export default function Test(state = initialState,action){
    switch(action.type){
        case "RECIEVE_TEST":
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
    let arr_cp = arr.slice();
    for(let i in arr_cp){
        if (arr_cp[i].test_id === test.test_id){
            arr_cp[i] = test;
            break;
        }
    }
    return arr_cp;
}