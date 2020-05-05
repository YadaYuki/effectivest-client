import React from "react";
import { Card, CardContent } from "@material-ui/core";
import "./DescItem.css";
export default function DescItem(props) {
    return (
        <Card className="descItem">
            <CardContent >
                <img width="200px" src={props.imgUrl} alt={props.imgAlt} />
                <p>{props.description}</p>
            </CardContent>
        </Card>
    );
}