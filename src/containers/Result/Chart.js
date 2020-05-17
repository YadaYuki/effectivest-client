import {connect} from "react-redux";
import Chart from "../../components/Result/Chart";
const mapStateToProps = (state,ownProps)=>({
    result:state.DoTest.result,
});

export default connect(mapStateToProps)(Chart);