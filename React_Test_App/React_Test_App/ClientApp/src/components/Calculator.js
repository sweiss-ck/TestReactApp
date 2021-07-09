import React, { Component } from 'react';
import ReactDom from 'react-dom';

const nums = {
    num1: 0,
    num2: 0
};

class Caculator extends Component {

    onClick = () => {
        this.props.onClick(nums)
    }
    onChange = ({ target: { name, value } }) => {
        if (name === 'num1') {
            nums[0] = value;
        }
        else if (name === 'num2') {
            nums[1] = value;
        }
    }
    onSelectChange = e => {
        this.props.onSelectChange(e.target.value);
    }

    render() {
        return (
            <div>
                <input type="text" className="form-control col-md-3" name="num1" onChange={this.onChange} style={{ marginRight: 5 }} />
                <select name="operator" className="form-control col-md-3" onChange={this.onSelectChange} style={{ marginRight: 5 }}>
                    <option value="*">x</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="/">/</option>
                </select>
                <input type="text" className="form-control col-md-3" name="num2" onChange={this.onChange} />  <br />
                <button name="button" className="btn btn-primary" onClick={this.onClick} style={{ marginTop: 5 }}>Click to calculate!</button>
            </div>
        );
    }
}

export default Caculator;