import React from "react";
import BackButton from "../CommonComponent/BackButton";
export default function GraphHeader({testname}) {
    return (
            <h1 style={{ fontFamily: "Roboto" }}><BackButton /><span className="graphTestnameWrapper">{testname}</span></h1>
    );
}