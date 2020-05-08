import React from "react";
import "./InputInfoContent.css"
import {  TextField } from "@material-ui/core"
import CreateButton from "./CreateButton";
export default class InputInfoContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testname: "",
            description: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        let name = e.target.name;
        this.setState({ ...this.state, [name]: e.target.value });
    }
    handleClick() {
        const testInfoIsCorrect = (this.state.testname.length <= 10) && (this.state.description.length > 0);
        if(testInfoIsCorrect){
            const {testname,description} = this.state;
            this.props.addTest(testname,description);
        }else{
            alert("入力が正しくありません");
        }
    }

    render() {
        return (
            <div className="inputInfoContent">
                <div className="testname">
                    {/* <InputLabel htmlFor="testname" ><p><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M5 4v3h5.5v12h3V7H19V4z" /><path d="M0 0h24v24H0V0z" fill="none" /></svg>タイトル(10字以内)</p></InputLabel> */}
                    <TextField
                        id="standard-textarea"
                        label="新しいテスト名"
                        placeholder="ここに入力してください"
                        variant="outlined"
                        name="testname"
                        onChange={this.handleChange}
                        fullWidth
                    />
                </div>
                <div className="description">
                    <TextField
                        id="standard-textarea"
                        label="説明"
                        placeholder="ここに入力してください"
                        multiline
                        rows={4}
                        variant="outlined"
                        name="description"
                        onChange={this.handleChange}
                        fullWidth
                    />
                </div>
                <CreateButton handleClick={this.handleClick} />
            </div>
        )
    }
}