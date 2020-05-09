import React from "react";
import Button from "@material-ui/core/Button";
import baseURL from "../../actions/baseURL";
export default class GetCSVButton extends React.Component{
    render(){
        const {test_id} = this.props;
        return (
            <Button　href={`${baseURL}/csv/get/${test_id}`} variant="contained" color="primary" endIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>}>
                CSVダウンロード
            </Button>
        );
    }
}
