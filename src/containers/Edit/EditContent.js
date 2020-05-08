import {connect} from "react-redux";
import * as actions from "../../actions/testAction";
import EditContent from "../../components/Edit/EditContent";
const mapStateToProps = (state,ownProps)=>({
    tests:state.Test.test,
    error:state.Test.error,
});
const mapDispatchToProps = dispatch => ({
    getTest(){
        dispatch(actions.fetchGetTest());
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(EditContent);