import React from "react";
import ApplicationDesc from "./ApplicationDesc";
import correctRateUrl from "./static/correctRate.png";
import createTestUrl from "./static/createTest.png";
import resultShowUrl from "./static/resultShow.png"
import DescItem from "./DescItem";
import {Button} from "@material-ui/core";
export default function TopContent(){
    return (
        <div>
            <ApplicationDesc />
            <DescItem imgUrl={correctRateUrl} imgAlt="テスト作成" description="テストを作成します"/>
            <DescItem imgUrl={createTestUrl} imgAlt="" description="問題の正答率を保存し、苦手な問題をを重点的に学べます"/>
            <DescItem imgUrl={resultShowUrl} imgAlt="" description="それまでの結果を示すグラフで、自ら成長を実感することも可能です"/>
            <Button >
                Let's Start!
            </Button>
        </div>
    );
}