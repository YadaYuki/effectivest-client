import React from "react";
import { Card, CardContent } from "@material-ui/core";
import "./DescItem.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import MediaQuery from "react-responsive";// ウィンドウ幅に応じて、アニメーションを変える
export default function DescItem(props) {
    return (
        <>
            <MediaQuery query="(max-width:767px)">{/*幅が767以下 */}
                <ScrollAnimation animateIn="bounceInRight"
                    duration={1}>
                    <Card className="descItem">
                        <CardContent >
                            <img width="200px" src={props.imgUrl} alt={props.imgAlt} />
                            <p>{props.description}</p>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </MediaQuery>
            <MediaQuery query="(min-width:767px)">{/*幅が767以上 */}
                <ScrollAnimation animateIn="fadeIn"
                    duration={2}>
                    <Card className="descItem">
                        <CardContent >
                            <img width="200px" src={props.imgUrl} alt={props.imgAlt} />
                            <p>{props.description}</p>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </MediaQuery>
        </>
    );
}