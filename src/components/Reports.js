
import {LineChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import {Tooltip} from "react-bootstrap";
import produce from "immer";

;


class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            data: [
                {name: 'Page A', uv: 0, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 1, pv: 2400, amt: 2400},
            ]
        };
    }

    render() {
        return (
            <div>

                <LineChart width={600} height={300} data={this.state.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name"    />
                    <YAxis />
                    <Tooltip />
                </LineChart>

                <p>Data {this.state.data[1].uv} times</p>
                <p>You clicked {this.state.count} times</p>
                <Button onClick={() =>this.setState(produce(state => {
                    state.data[1].uv = this.state.count + 1;
                    state.count = this.state.count + 1;
                    }))}>
                    Click me
                </Button>
            </div>
        );
    }
}

export default Reports;