import {connect} from "react-redux";
import * as actions from "../../actions/doTestAction";
import TestItem from "../../components/Test/TestItem";
const mapStateToProps = (state,ownProps) => ({
    ...ownProps,
});
const mapDispatchToProps =(dispatch)=> ({
    setUserAns(question_id,user_ans){
        dispatch(actions.setUserAns(question_id,user_ans));
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(TestItem);