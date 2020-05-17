import React from "react";
import DescItem from "./DescItem";
import testBeforeUrl from "./static/testBefore.png";
import createTestUrl from "./static/createTest.png";
import resultShowUrl from "./static/resultShow.png"
import "./DescItems.css";

export default function DescItems() {
    return (
        <div className="descItems">
            <DescItem imgUrl={testBeforeUrl} imgAlt="テスト作成" description="テストを作成します" />
            <DescItem imgUrl={createTestUrl} imgAlt="" description="問題の正答率を保存し、苦手な問題をを重点的に学べます" />
            <DescItem imgUrl={resultShowUrl} imgAlt="" description="それまでの結果を示すグラフで、自ら成長を実感することも可能です" />
        </div>
    );
}