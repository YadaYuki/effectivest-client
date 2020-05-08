import React from "react";
import qs from "querystring";
import InputQuestionHeader from "./InputQuestionHeader";
import InputQuestionContent from "./InputQuestionContent";
import "./InputQuestion.css"
export default class InputQuestion extends React.Component {
    render() {
        const { location: { search } } = this.props;
        const { testname, test_id } = qs.parse(search);
        return (
            <div className="inputQuestionWrapper">
                <InputQuestionHeader testname={testname} />
                <InputQuestionContent test_id = {test_id} />
            </div>
        );
    }
}