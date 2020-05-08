import React from "react";
import Header from "../CommonComponent/Header";
import TestListContent from "../../containers/TestList/TestListContent";
import TabMenu from "../CommonComponent/TabMenu";
export default function TestList(){
    return (
        <>
            <Header />
            <TestListContent />
            <TabMenu value={0} />
        </>
    );
} 