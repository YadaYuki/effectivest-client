import React from "react";
import TestListItem from "./TestListItem";
import "./TestListContent.css"
import Loading from "../CommonComponent/Loading";
export default class TestListContent extends React.Component {
    componentWillMount() {
        this.props.getTest();
    };
    
    render() {
        const { tests, error } = this.props;
        if (error) {
            return <p>Error</p>
        } else if (typeof tests === "undefined") {
            return <Loading />
        } else {
            return (
                <div className="testListContent">
                    {tests.map(test=>(
                        <TestListItem test_id={test.test_id} testname={test.testname} description={test.description} />
                    ))}
                </div>
            );
        }
    }
}