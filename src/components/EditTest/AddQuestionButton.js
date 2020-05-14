import React from "react";
import { IconButton } from "@material-ui/core";
export default function AddQuestionButton({addQuestion}) {
    return (
        <IconButton onClick={addQuestion} style={{backgroundColor:"#56CCF2"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
        </IconButton>
    );
};