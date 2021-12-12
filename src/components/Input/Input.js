import React, { Component } from "react";

class Input extends Component {
    render() {
        return <input className="input is-large" placeholder={this.props.placeholder} {...this.props.input}/>
    }
}
export default Input;
