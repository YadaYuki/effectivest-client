import React from "react";
import "./Result.css"
import Chart from "../../containers/Result/Chart";
import Mistakes from "./Mistakes"
import ResultHeader from "../../containers/Result/ResultHeader";
import HomeButton from "../CommonComponent/HomeButton";
export default function Result(props) {
    
    return (
            <>
            <div className="resultWrapper">
            <ResultHeader />
            <Chart />
            </div>
            <Mistakes />
            <HomeButton />
            </>
    );
};