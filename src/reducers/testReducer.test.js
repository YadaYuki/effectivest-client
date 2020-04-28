import {initialState} from "./testReducer";
const initialStateTest = {
    test:undefined,
    error:false
};
describe("testReducer initialState test",()=>{
    it("initialState",()=>{
        expect(initialStateTest).toEqual(initialState);
    });
});