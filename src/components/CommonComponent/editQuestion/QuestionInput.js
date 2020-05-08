import React from "react";
import {Paper, Input} from "@material-ui/core";
import "./QuestionInput.css"
import AddQuestionButton from "./AddQuestionButton"
export default class QuestionInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            question:"",answer:""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({...this.state,[e.target.name]:e.target.value});
    }
    addQuestion(){
        const {question,answer} = this.props;
        const questionIsCorrect = (question.length > 0) && (answer > 0);
        if(questionIsCorrect){
            alert("追加");
        }else{
            alert("問題と答えを入力してください");
        }
    }
    render(){
        return(
            <>
            <Paper elevation={0} className="questionInput">
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
            
            <AddQuestionButton  addTest={this.addQuestion}/>
            </>
        );
    }
}