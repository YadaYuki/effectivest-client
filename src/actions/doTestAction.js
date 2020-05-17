import baseURL from "./baseURL";
import axios from "axios";
import qs from "querystring";

export function setTest(test) {
    return {
        type: "SET_TEST",
        payload: { test },
    };
};
export function setTime(time) {
    return {
        type: "SET_TIME",
        payload: { time },
    };
};
export function setTestIsStart(test_is_start) {
    return {
        type: "SET_TEST_IS_START",
        payload: { test_is_start },
    };
};
export function setTestIsFinished(test_is_finished) {
    return {
        type: "SET_TEST_IS_FINISHED",
        payload: {test_is_finished },
    };
};
export function setUserAns(question_id, user_ans) {
    return {
        type: "SET_USER_ANS",
        payload: { question_id, user_ans },
    };
};
export function setResult(point, max_point, correct_rate) {
    const result = { point, max_point, correct_rate };
    return {
        type: "SET_RESULT",
        payload: { result }
    };
}
export function requestFailed() {
    return {
        type: "REQUEST_FAILED"
    };
}
export function setMistakes(mistakes) {
    return {
        type: "SET_MISTAKES",
        payload: { mistakes }
    };
};
export function setCorrects(corrects) {
    return {
        type: "SET_CORRECTS",
        payload: { corrects }
    };
};
export function setResultId(result_id) {
    return {
        type: "SET_RESULT_ID",
        payload: { result_id }
    };
};
export function setQuestions(questions) {
    return {
        type: "SET_QUESTIONS",
        payload: { questions },
    };
};

export function fetchUpdateCorrectTime() {
    return async (dispatch, getState) => {
        try {
            const user_token = getState().User.user_token;
            const corrects = getState().DoTest.corrects;
            const URL = baseURL + "/question";
            const response = await axios.put(`${URL}/update/correct_time`, { user_token, question_id: corrects });
            if (response.data.is_updated === true) {

            } else {
                dispatch(requestFailed());
            };
        } catch (err) {
            dispatch(requestFailed());
        };
    };
};

export function fetchGetQuestions() {
    return async (dispatch, getState) => {
        try {
            const { test_id, mode, question_num } = getState().DoTest.test;
            const params = qs.stringify({ test_id, is_test: true, question_num });
            const URL = baseURL + "/question";
            const response = await axios.get(`${URL}/get/${mode}/?${params}`);
            const questions = response.data;
            for (let question of questions) {
                question["user_ans"] = "";
            }
            dispatch(setQuestions(questions));
            dispatch(setTestIsStart(true));
        } catch (err) {
            console.log(err);
            dispatch(requestFailed());
        };
    };
};

export function fetchAddResult() {
    return async (dispatch, getState) => {
        try {
            const { test_id } = getState().DoTest.test;
            const user_token = getState().User.user_token;
            const { point, max_point, correct_rate } = getState().DoTest.result;
            const URL = baseURL + "/result";
            const response = await axios.post(`${URL}/add`, { test_id, user_token, point, max_point, correct_rate });
            const { result_id, is_resulted } = response.data;
            if (is_resulted === true) {
                dispatch(setResultId(result_id));
            } else {
                dispatch(requestFailed());
            };
        } catch (err) {
            console.log(err);
            dispatch(requestFailed());
        };
    };
};
export function fetchAddMistake() {
    return async (dispatch, getState) => {
        const mistakes = getState().DoTest.mistakes;
        const result_id = getState().DoTest.result_id;
        const user_token = getState().User.user_token;
        const URL = baseURL + "/mistake";
        //add result id;
        for (let mistake of mistakes) {
            mistake["result_id"] = result_id;
        }
        try {
            const response = await axios.post(`${URL}/add`, { user_token, mistake: mistakes });
            if(response.data.is_mistaked === true){
                
            }else{
                dispatch(requestFailed());
            }
        } catch (err) {
            console.log(err);
            dispatch(requestFailed());
        }
    }
}

export function scoring() {
    return async (dispatch, getState) => {
        const questions = getState().DoTest.questions;
        const scoreAndMistakesAndCorrects = getPoint(questions);
        const { point, mistakes, corrects } = scoreAndMistakesAndCorrects;
        // correct
        dispatch(setCorrects(corrects));
        //mistakes
        dispatch(setMistakes(mistakes));
        // results
        const max_point = getState().DoTest.questions.length;
        const correct_rate = point / max_point;
        dispatch(setResult(point, max_point, correct_rate));
    }
}

const getPoint = (questions) => {
    var mistakes = [];
    var corrects = [];
    let point = 0;
    for (let question of questions) {
        if (question.answer !== question.user_ans) {
            mistakes.push({ question_id: question.question_id, question: question.question, answer: question.answer });
        } else {
            corrects.push(question.question_id);
            point++;
        }
    }
    return { point, mistakes, corrects };
};
