import React from "react";
import { Card, CardActions, CardContent } from '@material-ui/core';
import StartButton from "./StartButton";
import "./TestListItem.css"
export default function TestListItem(props) {
    const { testname, description, test_id } = props;
    return (
        <Card className="testListItem">
            <CardContent className="testListItemContent">
                <h2>{testname}</h2>
                <p>{description}</p>
                <CardActions>
                    <StartButton testname={testname} test_id={test_id} />
                </CardActions>
            </CardContent>
        </Card>
    )
}