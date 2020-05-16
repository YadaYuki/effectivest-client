import React from "react";
import { Doughnut } from "react-chartjs-2";
const dataPie = (correctRate) => ({
    labels: ["Correct", "Mistake"],
    datasets: [{
        label: "結果",
        data: [correctRate, (100 - correctRate)],
        backgroundColor: [
            "red", "white"
        ]
    }]
});
const options = {
    legend: {
        display: false
    }, title: {
        text: "sample",
        verticalAlign: "center",

    }
};
export default class Chart extends React.Component {
    render() {
        const point = 10, max_point = 20;
        const correct_rate = point / max_point;
        return (
            <div className="chartWrapper" style={{ width: "400px", margin: "10px auto" }}>
                <Doughnut data={dataPie(Math.round(correct_rate * 100))} options={options} />
                <h3>{point}pt</h3>
            </div>
        );
    }
}