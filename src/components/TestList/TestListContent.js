import React from "react";
import TestListItem from "./TestListItem";
import "./TestListContent.css"
export default function TestListContent(props) {
    return (
        <div className="testListContent">
            <TestListItem test_id={1} testname={"testname"} description={"絶対に作り上げて見せる！！"} />
        </div>
    );
}