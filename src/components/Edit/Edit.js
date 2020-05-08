import React from "react";
import Header from "../CommonComponent/Header";
import EditContent from "../../containers/Edit/EditContent";
import TabMenu from "../CommonComponent/TabMenu";
export default function Edit(props){
    return (
        <>
            <Header />
            <EditContent />
            <TabMenu value={1}/>
        </>
    );
}