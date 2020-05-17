import {connect} from "react-redux";
import * as actions from "../../actions/doTestAction";
import TestContent from "../../components/Test/TestContent";
const mapStateToProps = (state,ownProps) => ({
    questions:state.DoTest.questions,
    error:state.DoTest.error,
});
const mapDispatchToProps = dispatch => ({
    getQuestions(){
        dispatch(actions.fetchGetQuestions());
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(TestContent);