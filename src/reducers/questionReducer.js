export const initialState = { test_id: undefined, questions: [], error: false, }
export default function Question(state = initialState, action) {
    switch (action.type) {
        case "RECIEVE_QUESTION":
            return {
                ...state, questions: action.payload.questions
            };
        case "START_REQUEST":
            return {
                ...state, test_id: action.payload.test_id, error: false
            }
        case "REQUEST_FAILED":
            return {
                ...state, error: true
            }
        case "UPDATE_QUESTION":
            return {
                ...state, questions: updateQuestion(state.questions, action.payload)
            }
        case "ADD_QUESTION":
            return {
                ...state, questions: state.questions.concat(action.payload)
            }
        case "DELETE_QUESTION":
            return {
                ...state,
                 questions: state.questions.filter((question) => { return question.question_id !== action.payload.question_id })
            }
        default:
            return state;
    }
}

function updateQuestion(arr, question) {
    let arr_cp = arr.slice();
    for (let i in arr_cp) {
        if (arr_cp[i].question_id === question.question_id) {
            arr_cp[i] = question;
            break;
        }
    }
    return arr_cp;
}