import {connect} from "react-redux";
import MistakeContent from "../../components/Result/MistakeContent";
const mapStateToProps = (state,ownProps)=>({
    mistakes:state.DoTest.mistakes,
});
export default connect(mapStateToProps)(MistakeContent);