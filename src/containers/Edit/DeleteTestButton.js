import {connect} from "react-redux";
import * as actions from "../../actions/testAction";
import DeleteTestButton from "../../components/Edit/DeleteTestButton";
const mapStateToProps = (state,ownProps) => ({
    test_id:ownProps.test_id,
});
const mapDispatchToProps = dispatch => ({
    deleteTest(test_id){
        dispatch(actions.fetchDeleteTest(test_id));
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(DeleteTestButton);