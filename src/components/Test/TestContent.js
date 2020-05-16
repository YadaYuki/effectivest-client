import React from "react";
import TestItem from "./TestItem";
export default function TestContent() {
    return (
        <div className="testContentWrapper">
            <TestItem question="question" question_id={1} />
            <TestItem question="question" question_id={1} />
            <TestItem question="question" question_id={1} />
        </div>
    );
}