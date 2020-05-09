import React from "react";
import {Button} from "@material-ui/core"
export default function FinishButton (props){
    const style = {
        position:"fixed",
        bottom:"5%",
        right:"5%",
        fontSize:"20px",
        color:"white",
        backgroundColor:"#9B51E0",
    };
    return (
        <Button href="/test_list" style={style}><svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>FINISH</Button>
    )
}