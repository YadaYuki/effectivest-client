import {connect} from "react-redux";
import * as actions from "../../actions/questionAction";
import EditTestContent from "../../components/EditTest/EditTestContent";
const mapStateToProps = (state,ownProps)=>({
    test_id:ownProps.test_id,
    questions:state.Question.questions,
    error:state.Question.error,
});
const mapDispatchToProps = dispatch => ({
    getQuestions(test_id){
        dispatch(actions.fetchGetAllQuestion(test_id));
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(EditTestContent);