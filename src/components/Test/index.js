import React from "react";
import "./Test.css"
import TestContent from "./TestContent";
import TestHeader from "./TestHeader";
import FinishButton from "../CommonComponent/FinishButton";
export default function Test(props) {
    return (
        <div className="testWrapper">
            <TestHeader testname="test" time="5:00" />
            <TestContent />
            <FinishButton link="" />
        </div>
    );
}