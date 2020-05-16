import {connect} from "react-redux";
import * as actions from "../../actions/resultAction";
import GraphContent from "../../components/ResultGraph/GraphContent";
const mapStateToProps = (state,ownProps)=>({
    test_id:ownProps.test_id,
    results:state.Result.results,
    error:state.Result.error,
});
const mapDispatchToProps = dispatch =>({
    getResults(test_id){
        dispatch(actions.fetchGetResult(test_id))
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(GraphContent);