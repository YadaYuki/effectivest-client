import React from "react";
import Paper from "@material-ui/core/Paper";
export default function CorrectRateItem({ question, answer, correct_rate }) {
    return (
        <Paper className="correctRateItem">
            <div >
                <p>{`Q.${question}`}</p>
                <p>{`A.${answer}`}</p>
            </div>
            <p>{`正答率:${(correct_rate*100).toFixed(1)}%`}</p>
        </Paper>
    )
};