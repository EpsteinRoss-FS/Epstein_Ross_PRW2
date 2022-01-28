
import {LineChart, BarChart, PieChart, Line, XAxis, YAxis, CartesianGrid, Pie} from 'recharts';
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import {Tooltip} from "react-bootstrap";
import produce from "immer";

;


class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            lineData: [
                {name: 'Page A', uv: 0, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 0, pv: 2400, amt: 2400},
            ],

                pieData1: [
                        { name: 'A1', value: 100 },
                        { name: 'A2', value: 300 },
                        { name: 'B1', value: 100 },
                        { name: 'B2', value: 80 },
                        { name: 'B3', value: 40 },
                        { name: 'B4', value: 30 },
                        { name: 'B5', value: 50 },
                        { name: 'C1', value: 100 },
                        { name: 'C2', value: 200 },
                        { name: 'D1', value: 150 },
                        { name: 'D2', value: 50 },
                    ],
                pieData2: [
                        { name: 'Group A', value: 400 },
                        { name: 'Group B', value: 300 },
                        { name: 'Group C', value: 300 },
                        { name: 'Group D', value: 200 }
            ]
        };
    }

    render() {
        return (
            <div>

                <div class="row">
                <div class="col">
                <LineChart width={600} height={300} data={this.state.lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name"    />
                    <YAxis />
                    <Tooltip />
                </LineChart>
                </div>

                <div class="col">
                <PieChart width={400} height={400}>
                    <Pie data={this.state.pieData1} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={this.state.pieData2} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
                </div>
            </div>

                <p>Data {this.state.lineData[1].uv} times</p>
                <p>You clicked {this.state.count} times</p>
                <Button onClick={() =>this.setState(produce(state => {
                    state.lineData[1].uv = this.state.count + 1;
                    state.count = this.state.count + 1;
                    }))}>
                    Click me
                </Button>
            </div>
        );
    }
}

export default Reports;