import React from "react";
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from "../CommonComponent/Logo";
import AddTestButton from "./AddTestButton";
import "./Header.css"
export default function TopHeader() {
    return (
        <AppBar className="homeHeader" color="inherit">
            <Toolbar>
                <Logo />
                <AddTestButton />
            </Toolbar>
        </AppBar>
    );
}