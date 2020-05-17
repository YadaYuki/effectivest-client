import React from "react";
import { Paper, Input, Checkbox } from "@material-ui/core";
export default class MistakeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_ans: "",
            is_answered: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.getCheckBox = this.getCheckBox.bind(this);
    }
    handleChange(e) {
        this.setState({ ...this.state, user_ans: e.target.value });
    }
    getCheckBox() {
        if (this.state.user_ans === this.props.answer) {
           return( <Checkbox
                checked={true}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />)
        }else{
            return( <Checkbox
                checked={false}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />)
        }
    }
    render() {
        const { question, answer } = this.props;
        const { user_ans } = this.state;

        return (
            <Paper className="mistakeItem">
                <div>
                    <h3 style={{ fontFamily: 'Noto Sans JP' }}>Q.{question}</h3>
                    <Input
                        startAdornment={"A."}
                        value={user_ans}
                        onChange={this.handleChange}
                        name="user_ans"
                        size="normal"
                        placeholder={answer}
                        fullWidth
                        autoComplete="off"
                    />
                </div>
                {this.getCheckBox()}
            </Paper>
        );
    }
}