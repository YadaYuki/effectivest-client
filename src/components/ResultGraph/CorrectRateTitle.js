import React from "react";
import AppBar from "@material-ui/core/AppBar";
export default function CorrectRateTitle(){
    return(
        <AppBar className="correctRateTitle" style={{textAlign:"center",backgroundColor:"white",color:"black",height:"70px"}} >
            <h1 style={{ fontFamily: 'Noto Sans JP',marginTop:10,}}>正答率</h1>
        </AppBar>
    );
}