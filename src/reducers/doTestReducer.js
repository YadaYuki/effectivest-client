export const initialState = {
    test_is_doing: false,
    test: undefined,
    questions: [],
    mistakes: [],
    result: undefined,
    result_id: undefined,
    time: 0,
    corrects: [],
    error: false
}
export default function DoTest(state = initialState, action) {
    switch (action.type) {
        case "SET_TEST":
            return { ...state, test: action.payload.test };
        case "SET_TIME":
            return {...state,time:action.payload.time};
        case "SET_TEST_IS_DOING":
            return {...state,test_is_doing:action.payload.test_is_doing};
        case "SET_USER_ANS":
            return {...state,questions:updateUserAns(state.questions,action.payload.user_ans,action.payload.question_id)}
        case "SET_RESULT":
            return {...state,result:action.payload.result};
        case "REQUEST_FAILED":
            return {...state,error:true};
        case "SET_MISTAKES":
            return {...state,mistakes:action.payload.mistakes};
        case "SET_CORRECTS":
            return {...state,corrects:action.payload.corrects};
        case "SET_RESULT_ID":
            return {...state,result_id:action.payload.result_id};
        case "SET_QUESTIONS":
            return {...state,questions:action.payload.questions};
        default:
            return state;
    }
}
function updateUserAns(questions,user_ans,question_id){
    let questions_temp = questions.slice();
    for(let question of questions_temp){
        if (question.question_id === question_id){
            question.user_ans = user_ans;
            break;
        };
    };
    return questions_temp;
}