import React from "react";
function getTimeFormat(time) {
    let minute = `0${Math.floor(time / 60)}`.slice(-2);
    let second = `0${(time - 60 * minute)}`.slice(-2);
    return `${minute}:${second}`;
}
export default class Timer extends React.Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.test_is_start === true){
            setTimeout(() => { nextProps.setTime(nextProps.time - 1) }, 1000);
        }
    }

    render() {
        const { time } = this.props;
        if (time > 0) {
            return (
                <span className="time">{getTimeFormat(time)}</span>
            );
        } else {
            this.props.finishTest();
            alert("Finished");
            return (<span className="time">{getTimeFormat(time)}</span>);
        }
    }
};