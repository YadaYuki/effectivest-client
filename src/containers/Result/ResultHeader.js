import {connect} from "react-redux";
import ResultHeader from "../../components/Result/ResultHeader";
const mapStateToProps = (state,ownProps) => ({
    testname:state.DoTest.test.testname,
    mode:state.DoTest.test.mode,
});

export default connect(mapStateToProps)(ResultHeader);