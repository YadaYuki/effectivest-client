import React from "react";
import CorrectRateItem from "./CorrectRateItem";
import Loading from "../CommonComponent/Loading";
export default class CorrectRateContent extends React.Component{
    constructor(props){
        super(props);
        this.getCorrectRateContent = this.getCorrectRateContent.bind(this);
    }
    componentWillMount(){
        this.props.getQuestions(this.props.test_id)
    }
    getCorrectRateContent(){
        const {questions,error} = this.props;
        if(error === true){
            return (
                <h1>Error</h1>
            );
        }else if(questions.length === 0){
            return (
                <Loading />
            );
        }else{
            return (
                <>
                {questions.map(question=>(
                    <CorrectRateItem question={question.question} answer={question.answer} correct_rate = {question.correct_rate} />
                ))}
                </>
            );
        }
    }
    render(){
        return(
            <div className="correctRateContent">
                {this.getCorrectRateContent()}
            </div>
        );
    }
}