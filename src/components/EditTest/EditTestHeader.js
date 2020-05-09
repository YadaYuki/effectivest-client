import React from "react";
import { AppBar } from "@material-ui/core"
export default function EditTestHeader(props) {
    const {testname} = props;
    return (
        <AppBar className="editTestHeader" style={{textAlign:"center",backgroundColor:"white",color:"black",height:"70px"}} >
            <h1 style={{fontFamily:"Roboto"}}>{testname}</h1>
        </AppBar>
    );
}