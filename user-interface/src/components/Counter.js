import React, { Component } from 'react';
import '../App.css';
import { timingSafeEqual } from 'crypto';

class Counter extends Component {

    incrementCount = () => {
        this.setState({ count: this.state.count + 1})
    }

    decrementCount = () => {
        this.setState({ count: this.state.count - 1 })
    }

    constructor(props) {
        super(props);
            this.state = {
                count: 1
            }
        }

    render() {

        return(
            <div className="counter">
                <p className="quantity">quantity: </p>
                    <button className="counter-btn" id="decrease" onClick={this.decrementCount}>-</button>
                    <p classname="count">{this.state.count}</p>
                    <button className="counter-btn" id="increase" onClick={this.incrementCount}>+</button>
            </div>
        )
    }

}

export default Counter; 