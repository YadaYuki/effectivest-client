import React from "react";
import { CircularProgress } from "@material-ui/core"
export default function Loading() {
    return (
        <div className="loadingCircle">
            <CircularProgress color="primary" style={{"marginTop":"100px",}}/>
        </div>
    );
}