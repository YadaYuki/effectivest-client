import React from "react";
import qs from "querystring";
import "./Test.css"
import DoTest from "./DoTest";
import Result from "../Result";

export default class Test extends React.Component {
    componentWillMount() {
        const { location: { search } } = this.props;
        const { time, testname, question_num, mode } = qs.parse(search)
        const test_id = qs.parse(search)["?test_id"];
        this.props.setTest({ test_id, question_num, mode, testname });
        this.props.setTime(time);
    }
    render() {
        const { test_is_finished } = this.props;
        if (test_is_finished === false) {
            return (
                <DoTest />
            );
        } else {
            this.props.scoring();
            return (
                <Result />
            )
        }
    }
}
