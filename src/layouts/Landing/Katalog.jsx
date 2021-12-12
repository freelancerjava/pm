import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Magazin from './Magazin';

class Katalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (<div className="style">
            <Magazin
                rasm="https://avatars1.githubusercontent.com/u/66577?s=200&v=4"
                text="Banduella Kukuruz 340gr"
                text1="8500"
                text2="sum 1 shtuk" />

            <Magazin
                rasm="https://avatars1.githubusercontent.com/u/66577?s=200&v=4"
                text="Greenfiled Chay Earl Grey Fantasy 100gr"
                text1="13990"
                text2="sum 1 shtuk" />
            <Magazin
                rasm="https://avatars1.githubusercontent.com/u/66577?s=200&v=4"
                text="Greenfiled Chay Earl Grey Fantasy 100gr"
                text1="13990"
                text2="sum 1 shtuk" />
            <Magazin
                rasm="https://avatars1.githubusercontent.com/u/66577?s=200&v=4"
                text="Greenfiled Chay Earl Grey Fantasy 100gr"
                text1="13990"
                text2="sum 1 shtuk" />
            <Magazin
                rasm="https://avatars1.githubusercontent.com/u/66577?s=200&v=4"
                text="Greenfiled Chay Earl Grey Fantasy 100gr"
                text1="13990"
                text2="sum 1 shtuk" />

        </div>
        )
    }
}

export default Katalog;