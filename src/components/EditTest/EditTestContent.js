import React from "react";
import EditQuestionItem from "./EditQuestionItem";
import QuestionInput from "./QuestionInput";
export default class EditTestContent extends React.Component {
    componentWillMount(){
        this.props.getQuestions(this.props.test_id);
    }
    render() {
        const { test_id, questions,error } = this.props;
        if (error) {
            return <p>Error</p>;
        } else {
            return (
            <div className="editTestContent">
                {questions.map(question => (
                    <EditQuestionItem question_id={question.question_id} question={question.question} answer={question.answer} />
                ))}
                <QuestionInput {...{ test_id }} />
            </div>
            )
        }
    }
}