import React from "react";
import DeleteTestButton from "../../containers/Edit/DeleteTestButton";
import ResultGraphButton from "./ResultGraphButton";
import GetCSVButton from "./GetCSVButton";
import EditTestButton from "./EditTestButton";
import "./ButtonWrapper.css"
export default function ButtonWrapper(props) {
    const { test_id,testname } = props;
    return (
        <div className="buttonWrapper">
            <EditTestButton testname={testname} test_id={test_id} />
            <ResultGraphButton testname={testname} test_id={test_id} />
            <GetCSVButton test_id={test_id} />
            <DeleteTestButton test_id={test_id} />
        </div>
    );
}