import {connect} from "react-redux";
import * as actions from "../../actions/doTestAction";
import Timer from "../../components/Test/Timer";
const mapStateToProps = (state,ownProps) => ({
    time:state.DoTest.time,
    test_is_start:state.DoTest.test_is_start
});
const mapDispatchToProps = dispatch => ({
    setTime(time){
        dispatch(actions.setTime(time));
    },finishTest(){
        dispatch(actions.setTestIsFinished(true));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Timer);