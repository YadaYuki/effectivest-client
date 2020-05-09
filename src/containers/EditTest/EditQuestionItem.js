import {connect} from "react-redux";
import * as actions from "../../actions/questionAction";
import EditQuestionItem from "../../components/EditTest/EditQuestionItem";
const mapStateToProps = (state,ownProps)=>({
    question_id:ownProps.question_id,
    question:ownProps.question,
    answer:ownProps.answer,
});
const mapDispatchToProps = dispatch => ({
    deleteQuestion(question_id){
        dispatch(actions.fetchDeleteQuestion(question_id));
    },updateQuestion(question_id,question,answer){
        dispatch(actions.fetchUpdateQuestion(question_id,question,answer))
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(EditQuestionItem);