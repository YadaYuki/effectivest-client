import React from "react";
import { Line } from "react-chartjs-2";
import Loading from "../CommonComponent/Loading";
function labelGenerator(lastIdx) {
  let labelArr = [];
  let startIdx = (lastIdx < 10) ? 1 : (lastIdx - 9);
  for (let i = startIdx; i < startIdx + 10; i++) {
    labelArr.push(`第${i}回`);
  }
  return labelArr;
}
function dataGenerator(results){
  let dataArr = [];
  let startIdx = (results.length < 10)? 0:(results.length-10);
  for (let i = startIdx;i<results.length;i++){
    dataArr.push(results[i].correct_rate * 100);
  }
  return dataArr;
}

const options =
{
  elements: { line: { tension: 0.000001 } },
  title: { display: true, },
  maintainAspectRatio: false,
  legend: {
    labels: {
      fontSize: 20,
    }
  },scales:{
    yAxes:[{
      ticks:{
        max:100,
        min:0,
        stepSize: 20
      }
    }]
  }
};

const data = (results) => ({
  labels: labelGenerator(results.length),
  datasets: [{
    label: "得点率",
    borderColor: "blue",
    data: dataGenerator(results),
    fill: false,
    pointBorderWidth: 10
  }],
});

export default class GraphContent extends React.Component {
  constructor(props) {
    super(props);
    this.getGraph = this.getGraph.bind(this)
  }
  getGraph() {
    const { results, error } = this.props;
    if (error === true) {
      return (<h1>Error</h1>);
    } else if (typeof results === "undefined") {
      return (<Loading />);
    } else {
      return (<Line data={data(results)} width={10} options={options} height={200} />)
    }
  }
  componentWillMount() {
    this.props.getResults(this.props.test_id)
  }
  render() {
    return (
      <div style={{ width: "60%", margin: "10px auto" }}>
        {this.getGraph()}
      </div>
    );
  }
}