import React from "react";
import EditItem from "./EditItem";
import "./EditContent.css";
export default class EditContent extends React.Component{
    render(){
        return (
            <div className="editContent">
                <EditItem test_id={1} testname={"Sample"}/>
                <EditItem test_id={1} testname={"Sample"}/>
                <EditItem test_id={1} testname={"Sample"}/>
                <EditItem test_id={1} testname={"Sample"}/>
            </div>
        );
    }
}