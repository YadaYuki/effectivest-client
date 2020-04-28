import axios from "./axios";
import qs from "qs";
axios.defaults.baseURL = axios.defaults.baseURL + "/test";
export function startRequest() {
    return {
        type: "START_REQUEST",
        payload: {}
    };
};
export function recieveTest(test) {
    return {
        type: "RECIEVE_TEST",
        payload: { test }
    };
}
export function requestFailed() {
    return {
        type: "REQUEST_FAILED",
        payload: {}
    };
};
export function addTest(test) {
    return {
        type: "ADD_TEST",
        payload: { test }
    };
};
export function updateTest(test) {
    return {
        type: "UPDATE_TEST",
        payload: { test }
    }
}
export function deleteTest(test_id) {
    return {
        type: "DELETE_TEST",
        payload: { test_id }
    };
};
export function fetchGetTest() {
    return async (dispatch, getState) => {
        dispatch(startRequest());
        try {
            const user_token = getState().User.user_token;
            const params = qs.stringify({ user_token });
            const response = await axios.get(`/get/all?${params}`);
            const data = response.data;
            if (data.length) {
                dispatch(recieveTest(data));
            }else{
                dispatch(requestFailed());
            }
        } catch (err) {
            dispatch(requestFailed());
        }
    }
}