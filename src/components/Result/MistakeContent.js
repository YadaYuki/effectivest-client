import React from "react";
import MistakeItem from "./MistakeItem";
export default function MistakeContent({mistakes}) {
    return (
        <div className="mistakeContent">
            {
                mistakes.map(mistake => {
                    return (
                        <MistakeItem question={mistake.question} answer={mistake.answer} />
                    );
                })
            }
        </div>
    );

}