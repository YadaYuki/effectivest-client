import {connect} from "react-redux";
import * as actions from "../../actions/testAction";
import TestListContent from "../../components/TestList/TestListContent";
const mapStateToProps = (state,ownProps)=>({
    tests:state.Test.test,
    error:state.Test.error,
});
const mapDispatchToProps = dispatch => ({
    getTest(){
        dispatch(actions.fetchGetTest());
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(TestListContent);