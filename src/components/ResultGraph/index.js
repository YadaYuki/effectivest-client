import React from "react";
import "./resultGraph.css"
import qs from "querystring";
import Graph from "./Graph";
import CorrectRate from "./CorrectRate";
export default function ResultGraph(props) {
    const { location: { search } } = props;
    const { testname } = qs.parse(search);
    const test_id = qs.parse(search)["?test_id"];
    return (
        <>
            <Graph test_id={test_id} testname={testname} />
            <CorrectRate test_id={test_id} />
        </>
    );
};