import React from "react";
import { AppBar } from "@material-ui/core"
export default function InputQuestionHeader(props) {
    const {testname} = props;
    return (
        <AppBar style={{backgroundColor:"white",color:"black",height:"70px"}} >
            <h1>{testname}</h1>
        </AppBar>
    );
}