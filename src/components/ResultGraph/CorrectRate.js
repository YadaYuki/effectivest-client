import React from "react";
import CorrectRateTitle from "./CorrectRateTitle";
import CorrectRateContent from "../../containers/ResultGraph/CorrectRateContent";
export default function CorrectRate({test_id}){
    return(
        <div className="correctRateWrapper">
            <CorrectRateTitle />
            <CorrectRateContent test_id={test_id}/>
        </div>
    );
} 