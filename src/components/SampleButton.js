import React from "react";
import "./SampleButton.css"
export default class SampleButton extends React.Component {

    render() {
        return (
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                <span class="button_txt">{this.props.username}</span>
            </button>
        );
    }
}