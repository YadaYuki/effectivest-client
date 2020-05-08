import {connect} from "react-redux";
import * as actions from "../../actions/testAction";
import InputInfoContent from "../../components/InputInfo/InputInfoContent";
const mapStateToProps = (getState,ownProps)=>({
    
})
const mapDispatchToProps = dispatch => ({
    addTest(testname,description){
        dispatch(actions.fetchAddTest(testname,description));
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(InputInfoContent);