import React from "react";
import TopHeader from "./TopHeader";
import TopContent from "./TopContent";
export default class Top extends React.Component {
    render() {
        return (
            <div>
                <TopHeader />
                <TopContent />
            </div>
        );
    };
};