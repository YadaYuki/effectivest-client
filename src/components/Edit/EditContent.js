import React from "react";
import EditItem from "./EditItem";
import "./EditContent.css";
import Loading from "../CommonComponent/Loading";
export default class EditContent extends React.Component {
    componentWillMount() {
        this.props.getTest();
    }
    render() {
        const { tests, error } = this.props;
        if (error) {
            return <p>Error</p>
        } else if (typeof tests === "undefined") {
            return <Loading />
        } else {
            return (
                <div className="editContent">
                    {tests.map(test=>(
                        <EditItem test_id={test.test_id} testname={test.testname} />   
                    ))}
                </div>
            );
        }
    }
}