import React, { Component } from 'react';
import Calculator from './Calculator';

export class Home extends Component {
    static displayName = Home.name;

    state = {
        num1: 0,
        num2: 0,
        total: 0,
        operator: '*'
    }

    onClick = (nums) => {
        this.setState({ num1: nums[0], num2: nums[1] });
        this.calculate();
    }

    calculate = () => {
        var { operator } = this.state;
        var total = 0;
        switch (operator) {
            case '+': total = parseFloat(this.state.num1) + parseFloat(this.state.num2); break;
            case '-': total = parseFloat(this.state.num1) - parseFloat(this.state.num2); break;
            case '/': total = parseFloat(this.state.num1) / parseFloat(this.state.num2); break;
            case '*': total = parseFloat(this.state.num1) * parseFloat(this.state.num2); break;
        }
        this.setState({ total });
    }
    onSelectChange = operator => {
        this.setState({ operator });

        console.log(this.state.operator);

    }
    render() {
        return (
            <div>
                <label style={{ fontSize: 30 }}>Calculator</label>
                <Calculator onClick={this.onClick} num1={this.state.num1} num2={this.state.num2} onSelectChange={this.onSelectChange} />
                <label>Total: {this.state.total}</label>

            </div>
        );
    }
}
