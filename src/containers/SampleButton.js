import {connect} from "react-redux";
import SampleButton from "../components/SampleButton";
const mapStateToProps = (state,ownProps) => ({
    username:state.User.username,
});
export default connect(mapStateToProps)(SampleButton);