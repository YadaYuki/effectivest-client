import {connect} from "react-redux";
import * as actions from "../../actions/questionAction";
import QuestionInput from "../../components/EditTest/QuestionInput";
const mapStateToProps = (state,ownProps)=>({
});
const mapDispatchToProps = dispatch => ({
    addQuestion(question,answer){
        dispatch(actions.fetchAddQuestion(question,answer));
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(QuestionInput);