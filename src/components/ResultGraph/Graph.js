import React from "react";
import GraphHeader from "./GraphHeader";
import GraphContent from "../../containers/ResultGraph/GraphContent";
export default function Graph({testname,test_id}) {
    return (
            <div className="graphWrapper">
               <GraphHeader testname={testname} />
               <GraphContent test_id={test_id} />
            </div>
    );
}