import React from "react";
import { AppBar } from '@material-ui/core';
import Timer from "../../containers/Test/Timer";

export default class TestHeader extends React.Component {
    render() {
        const { testname } = this.props;
        return (
            <AppBar className="testHeader" style={{ backgroundColor: "white", color: "black", height: "70px" }} >
                <h1 style={{ fontFamily: "Roboto" }}><span className="testTestnameWrapper">{testname}</span><Timer /></h1>
            </AppBar>
        );
    };
};