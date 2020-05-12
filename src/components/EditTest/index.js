import React from "react";
import qs from "querystring";
import EditTestHeader from "./EditTestHeader";
import EditTestContent from "../../containers/EditTest/EditTestContent";
import FinishButton from "../CommonComponent/FinishButton";
import "./EditTest.css"
export default class EditTest extends React.Component {
    render() {
        const { location: { search } } = this.props;
        const {testname} = qs.parse(search);
        const test_id = qs.parse(search)["?test_id"];
        return (
            <div className="editTestWrapper">
                <EditTestHeader testname={testname} />
                <EditTestContent test_id = {test_id} />
                <FinishButton />
            </div>
        );
    }
}