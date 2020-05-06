import React from "react";
import ApplicationDesc from "./ApplicationDesc";
import DescItems from "./DescItems";
import {Button} from "@material-ui/core";
import "./TopContent.css";
export default function TopContent(){
    return (
        <div>
            <ApplicationDesc />
            <DescItems />
            <Button className="startButton">
                Let's Start!
            </Button>
        </div>
    );
}