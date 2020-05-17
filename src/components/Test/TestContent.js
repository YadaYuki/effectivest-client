import React from "react";
import TestItem from "../../containers/Test/TestItem";
import Loading from "../CommonComponent/Loading";
export default class TestContent extends React.Component {
    constructor(props){
        super(props);
        this.getContent = this.getContent.bind(this);
    }
    componentWillMount() {
        this.props.getQuestions();
    }
    getContent() {
        const { questions, error } = this.props;
        if (error) {
            return <p>Error</p>
        } else if (questions.length === 0) {
            return <Loading />
        } else {
            return (
                <>
                    {questions.map(question => (
                        <TestItem question={question.question} question_id={question.question_id} />
                    ))}
                </>
            );
        }
    }
    render() {

        return (
            <div className="testContentWrapper">
                {this.getContent()}
            </div>
        )
    }
}