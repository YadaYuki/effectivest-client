import {initialState,Mistake} from "./mistakeReducer";
import * as actions from "../actions/mistakeAction";
describe("switch case",()=>{
    it("ADD_MISTAKE",()=>{
        const mistake = {result_id:1,question_id:2};
        expect(Mistake(initialState,actions.addMistake(mistake))).toEqual({...initialState,mistakes:[mistake]});
    });
});