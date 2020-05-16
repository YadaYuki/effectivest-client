import React from "react";
import AppBar from "@material-ui/core/AppBar";
export default function MistakeTitle(){
    return(
        <AppBar className="mistakeTitle" style={{textAlign:"center",backgroundColor:"white",color:"black",height:"70px"}} >
            <h1 style={{ fontFamily: 'Noto Sans JP',marginTop:10,}}>間違えた問題</h1>
        </AppBar>
    );
}