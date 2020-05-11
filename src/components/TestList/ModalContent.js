import React from "react";
import { Paper, TextField, MenuItem,Button } from "@material-ui/core";
import "./ModalContent.css"
import {makeStyles} from "@material-ui/core/styles"
const modeOptions = [
    { value: "all", label: "すべて" }, { value: "week", label: "苦手" }, { value: "random", label: "ランダム" }
];

export default class ModalContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "all",
            minutes: 5,
            seconds: 0,
            question_num: 5,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
    render() {
        const { test_id, testname } = this.props;
        const { mode, minutes, seconds, question_num } = this.state;
        return (
            <Paper className="modalContent">
                <h1>{testname}</h1>
                <div className="modalInputWrapper">
                    <TextField
                        label="テストモード"
                        select
                        onChange={this.handleChange}
                        value={mode}
                        name="mode"
                        variant="outlined"
                        fullWidth   
                    >
                        {
                            modeOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <br /><br />
                    <TextField
                        label="問題数"
                        type="number"
                        onChange={this.handleChange}
                        value={question_num}
                        name="question_num"
                        variant="outlined"
                        fullWidth
                    />
                    <br /><br />
                    <TextField
                        label="分"
                        type="number"
                        onChange={this.handleChange}
                        value={minutes}
                        name="minutes"
                        variant="outlined"
                        fullWidth
                    />
                    <br /><br />
                     <TextField
                        label="秒"
                        type="number"
                        onChange={this.handleChange}
                        value={seconds}
                        name="seconds"
                        variant="outlined"
                        fullWidth
                    />
                    <br /><br />
                <Button fullWidth variant="contained" className="startTestButton">START<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/><path d="M0 0h24v24H0z" fill="none"/></svg></Button>
                </div>
            </Paper>
        );
    }
}