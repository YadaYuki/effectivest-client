import React from "react";
import { Card, CardContent } from "@material-ui/core";
import "./DescItem.css";
export default function DescItem(props) {
    return (
        <Card className="descItem">
            <CardContent >
                <img src={props.imgUrl} alt={props.imgAlt} />
                <h2>{props.description}</h2>
            </CardContent>
        </Card>
    );
}