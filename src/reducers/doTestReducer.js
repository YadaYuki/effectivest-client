export const initialState = {
    test_is_start:false,
    test:undefined,
    questions:[],
    mistakes:[],
    result:undefined,
    error:false
}
export default function DoTest(state = initialState,action){
    switch(action.type){
        case "SET_TEST":
            return {}
        default:
            return state;
    }
}