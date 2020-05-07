export const initialState ={
    mistakes:[],
}
export  function Mistake(state = initialState,action){
    switch (action.type){
        case "ADD_MISTAKE":
            return {
                ...state,mistakes:state.mistakes.concat(action.payload.mistake),
            };
        default:
            return state;
    }
}