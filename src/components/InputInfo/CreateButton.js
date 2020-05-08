import React from "react";
import Button from "@material-ui/core/Button";
import "./CreateButton.css"
export default function CreateButton(props){
    return (
        <Button className="createButton" onClick={props.handleClick} >
            作成<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </Button>
    );
} 