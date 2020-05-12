import React from "react";
import { AppBar} from '@material-ui/core';
export default function TestHeader({testname,time}) {
    return (
        <AppBar className="testHeader" style={{ backgroundColor: "white", color: "black", height: "70px" }} >
            <h1 style={{ fontFamily: "Roboto" }}><span className="testTestnameWrapper">{testname}</span><span className="time">{time}</span></h1>
        </AppBar>
    );
}