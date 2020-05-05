import React from "react";
import {AppBar,Toolbar} from '@material-ui/core';
import Logo from "../CommonComponent/Logo";
import ServiceStartButton from "./ServiceStartButton";
import "./TopHeader.css"
export default function TopHeader(){
    return (
        <AppBar className="topHeader" color="inherit">
            <Toolbar>
                <Logo />
                <ServiceStartButton />
            </Toolbar>
        </AppBar>
    );
}