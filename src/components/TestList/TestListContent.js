import React from "react";
import TestListItem from "./TestListItem";
import "./TestListContent.css"
export default class TestListContent extends React.Component {
    componentWillMount(){
        this.props.getTest();
    }
    render() {
        const {tests,error} = this.props;
        if(typeof test !== undefined){
            alert("test:"+JSON.stringify(tests));
        }
        return(
            <div className="testListContent">
                <TestListItem test_id={1} testname={"testname"} description={"絶対に作り上げて見せる！！"} />
            </div>
        );
    }
}