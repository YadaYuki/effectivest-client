import React from "react";
const modeJson = {
    all: "すべて", week: "苦手", random: "ランダム"
};
export default function ResultHeader(props) {
    const {testname,mode} = props;
    return (
        <h1 style={{ fontFamily: "Noto Sans JP" }}><span className="resultTestnameWrapper">{testname}</span><span className="resultModeWrapper">{modeJson[mode]}</span></h1>
    );
}