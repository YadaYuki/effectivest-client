import { connect } from "react-redux";
import * as actions from "../../actions/doTestAction";
import FinishButton from "../../components/Test/FinishButton";
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    finishTest() {
        dispatch(actions.setTestIsFinished(true));
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(FinishButton);