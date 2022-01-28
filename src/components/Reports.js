
import {LineChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import {Tooltip} from "react-bootstrap";

;


class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        };
    }

    render() {
        return (
            <div>

                <LineChart width={600} height={300} data={this.state.count} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name"    />
                    <YAxis />
                    <Tooltip />
                </LineChart>

                <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </Button>
            </div>
        );
    }
}

export default Reports;