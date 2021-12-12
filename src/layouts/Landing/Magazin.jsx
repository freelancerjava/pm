import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class Magazin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let { rasm, text, text1, text2 } = this.props
        return (<div className="border">
            <img src={rasm} className="img" />
            <div className="text1">
                <p>{text}</p>
                <div className="text">
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
        )
    }
}
export default Magazin;
