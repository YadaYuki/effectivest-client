import React from "react";
import { Paper, Input } from "@material-ui/core";
import "./EditTest.css";
import DeleteQuestionButton from "./DeleteQuestionButton";
import EditQuestionButton from "./EditQuestionButton";
export default class EditQuestionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question, answer: this.props.answer, is_edit: false
        }
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.editQuestion = this.editQuestion.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    deleteQuestion() {
        const { question_id } = this.props;
        if (window.confirm("削除しますか?")) {
            alert(`Delete ${question_id}`);
        }
    }
    editQuestion() {
        this.setState({ ...this.state, is_edit: !this.state.is_edit });
    }
    handleChange(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }
    getItemContent() {
        if (this.state.is_edit === true) {
            return (
                <div className="questionAnsWrapper">
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
                </div>
            );
        } else {
            return (
                <>
                    <DeleteQuestionButton deleteQuestion={this.deleteQuestion} />
                    <div className="questionAnsWrapper">
                        <p>Q.{this.state.question}</p>
                        <p>A.{this.state.answer}</p>
                    </div>
                </>
            );
        }
    }
    render() {
        return (
            <div className="editQuestionItem">
                <Paper className="editQuestionItemWrapper" elevation={0} style={{ padding: "15px" }}>
                    {this.getItemContent()}
                    <EditQuestionButton editQuestion={this.editQuestion} />
                </Paper>
            </div>
        );
    }
}