import {connect} from "react-redux";
import TestHeader from "../../components/Test/TestHeader";
const mapStateToProps = (state,ownProps) => ({
    testname:state.DoTest.test.testname,
});
const mapDispatchToProps = dispatch => ({
    
});
export default connect(mapStateToProps,mapDispatchToProps)(TestHeader);