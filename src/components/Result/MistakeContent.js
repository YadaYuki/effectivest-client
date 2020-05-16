import React from "react";
import MistakeItem from "./MistakeItem";
export default class MistakeContent extends React.Component {
    render() {
        return (
            <div className="mistakeContent">
                <MistakeItem question="question" answer = "answer" />
                <MistakeItem question="question" answer = "answer" />
                <MistakeItem question="question" answer = "answer" />
                <MistakeItem question="question" answer = "answer" />
                <MistakeItem question="question" answer = "answer" />
            </div>
        );
    }
}