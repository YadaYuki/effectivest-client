import { connect } from "react-redux";
import * as actions from "../../actions/doTestAction";
import Test from "../../components/Test";
const mapStateToProps = (state, ownProps) => ({
    ...ownProps, test_is_finished: state.DoTest.test_is_finished,
});
const mapDispatchToProps = (dispatch) => ({
    setTest(test) {
        dispatch(actions.setTest(test));
    }, setTime(time) {
        dispatch(actions.setTime(time));
    }, scoring() {
        dispatch(actions.scoring());
    }, fetchAddResult() {
        dispatch(actions.fetchAddResult());
    }, fetchUpdateCorrectTime() {
        dispatch(actions.fetchUpdateCorrectTime());
    }, 
});
export default connect(mapStateToProps, mapDispatchToProps)(Test);