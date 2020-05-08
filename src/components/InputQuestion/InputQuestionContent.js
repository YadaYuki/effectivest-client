import React from "react";
import QuestionInput from "../CommonComponent/editQuestion/QuestionInput";
export default class InputQuestionContent extends React.Component{
    render(){
        return(
            <div className="inputQuestionContent">
                <QuestionInput />
            </div>
        );
    }
}