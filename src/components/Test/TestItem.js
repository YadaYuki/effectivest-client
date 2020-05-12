import React from "react";
import { Card, CardContent,  Input } from '@material-ui/core';
export default class TestItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_answer:""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({user_answer:e.target.value});
    }
    render() {
        const question = this.props.question;
        const user_answer = this.state.user_answer
        return (
            <Card className="testItem" variant="outlined">
                <CardContent>
                    <p>Q.{question}</p>
                    <Input
                        id="standard-adornment-amount"
                        value={user_answer}
                        onChange={this.handleChange}
                        startAdornment={"A."}
                        fullWidth
                    />
                </CardContent>
            </Card>
        );
    }
}