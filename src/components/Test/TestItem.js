import React from "react";
import { Card, CardContent,  Input } from '@material-ui/core';
export default class TestItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_ans:""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({user_ans:e.target.value});
        this.props.setUserAns(this.props.question_id,e.target.value);
    }
    render() {
        const question = this.props.question;
        const user_ans = this.state.user_ans
        return (
            <Card className="testItem" variant="outlined">
                <CardContent>
                    <p>Q.{question}</p>
                    <Input
                        id="standard-adornment-amount"
                        value={user_ans}
                        onChange={this.handleChange}
                        startAdornment={"A."}
                        fullWidth
                        autoComplete="off"
                    />
                </CardContent>
            </Card>
        );
    }
}