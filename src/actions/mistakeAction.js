import baseURL from "./baseURL";
import qs from "qs";
import axios from "axios";
axios.defaults.baseURL = baseURL  + "/mistake";
export function addMistake(mistake) {
    return {
        type: "ADD_MISTAKE",
        payload: { mistake }
    };
};
export function requestFailed() {
    return {
        type: "REQUEST_FAILED",
        payload: {},
    }
}
export function fetchAddMistake() {
    return async (dispatch, getState) => {
        try {
            const user_token = getState().User.user_token;
            const mistake = getState().Mistake.mistakes;
            const response = await axios.post("/add", { user_token, mistake });
            if (response.data.is_mistaked === false) {
                requestFailed();
            }
        } catch (err) {
            requestFailed();
        }
    };
}