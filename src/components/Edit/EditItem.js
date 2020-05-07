import React from "react";
import ButtonWrapper from "./ButtonWrapper"
import { Card, CardContent} from "@material-ui/core";
import "./EditItem.css";
export default function EditItem(props) {
    const { test_id, testname } = props;
    return (
        <Card className="editItem" variant="outlined">
            <CardContent className="editItemContent">
                <h1>{testname}</h1>
                <ButtonWrapper test_id={test_id}/>
            </CardContent>
        </Card>
    );
}