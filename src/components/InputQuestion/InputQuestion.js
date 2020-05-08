import React from "react";
import qs from "querystring";
import "./InputQuestion.css"
export default class InputQuestion extends React.Component{
    render(){
        const {location:{search}} = this.props;
        const params = qs.parse(search);
        return(
            <div className="inputQuestionWrapper"><h1>{params.testname}</h1></div>
        );
    }
}