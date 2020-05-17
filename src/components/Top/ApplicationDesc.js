import React from "react";
import { Card, CardContent } from "@material-ui/core";
import "./ApplicationDesc.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function ApplicationDesc() {
    return (
        <ScrollAnimation animateIn="bounce">
        <Card className="applicationDesc">
            <CardContent >
                <svg xmlns="http://www.w3.org/2000/svg" className="rateUp" height="24" viewBox="0 0 24 24" width="24"><path fill="#EB5757" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                <p> EFFECTIVESTは<br />あなたの学びを<br />最大効率化する<br />学習アプリです</p>
            </CardContent>
        </Card>
        </ScrollAnimation>
    );
}