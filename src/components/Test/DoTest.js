import React from "react";
import TestContent from "../../containers/Test/TestContent";
import TestHeader from "../../containers/Test/TestHeader";
import FinishButton from "../../containers/Test/FinishButton";
export default function DoTest(props) {
    return (<div className="testWrapper">
        <TestHeader />
        <TestContent />
        <FinishButton />
    </div>);
}