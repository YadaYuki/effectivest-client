import React from "react";
import {Button} from "@material-ui/core"
export default function HomeButton (props){
    const style = {
        position:"fixed",
        bottom:"10px",
        right:"10px",
        fontSize:"20px",
        color:"white",
        backgroundColor:"#9B51E0",
    };
    return (
        <Button href="/test_list" style={style}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 0 24 24" width="24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>Homeへ</Button>
    )
}