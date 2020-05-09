import React from "react";
import { Paper, Input } from "@material-ui/core";
import "./EditTest.css"
import AddQuestionButton from "./AddQuestionButton"
export default class QuestionInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "", answer: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.addQuestion = this.addQuestion.bind(this);
    }
    handleChange(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
    addQuestion() {
        const { question, answer } = this.state;
        const questionLengthIsCorrect = (question.length > 0) && (answer.length > 0);
        if (questionLengthIsCorrect) {
            this.props.addQuestion(question,answer);
            this.setState({ question: "", answer: ""});
        } else {
            alert("問題と答えを入力してください");
        }
    }
    render() {
        return (
            <div className="questionInput">
                <Paper elevation={0} style={{padding:"15px"}}>
                    <Input
                        startAdornment={"Q"}
                        value={this.state.question}
                        onChange={this.handleChange}
                        name="question"
                        size="normal"
                        fullWidth
                    />
                    <br />
                    <br />
                    <Input
                        startAdornment={"A"}
                        value={this.state.answer}
                        onChange={this.handleChange}
                        name="answer"
                        size="normal"
                        fullWidth
                    />

                </Paper>
                <br />
                <AddQuestionButton addQuestion={this.addQuestion} />
            </div>
        );
    }
}