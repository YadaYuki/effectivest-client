import React from "react";
import "./Test.css"
import { StylesProvider } from "@material-ui/core/styles";
import TestItem from "./TestItem";
import TestHeader from "./TestHeader";
import FinishButton from "../CommonComponent/FinishButton";
export default function Test() {
    return (
        <StylesProvider injectFirst>
            <div className="testWrapper">
                <TestHeader testname="test" time = "5:00" />
                <div className="testContentWrapper">
                    <TestItem question="question" question_id={1}/>
                    <TestItem question="question" question_id={1}/>
                    <TestItem question="question" question_id={1}/>
                </div>
                <FinishButton link="" />
            </div>
        </StylesProvider>
    );
}