import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import People from './People';
import './style.css'

class Sms extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (<div className="gradient" style={{
            border: '20px solid white',
            display: 'flex',
            flexDirection: 'column', width: "100%",
            height: 500, color: 'white'
        }}>
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', margin: 40 }}>
                <p style={{ fontSize: 35, margin: 5 }}>What Do People Think</p>
                <p style={{ textAlign: 'center', width: 450, fontSize: 15, margin: 5 }}>
                    Lorem ipsum or lipsum as it is sometimes known is a text usedin laying out print,graphic
                </p>
            </div>
            <div style={{
                display: 'flex', flexDirection: 'row',
                height: 200, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <People textarea="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur sagittis felis non fermentum. Fusce sodales dui at urna fermentum aliquet.Praesent eget diam a lacus volutpat gravida nec in enim. Nam ultricies ante eu tellus finibus."
                    rasm="https://avatars1.githubusercontent.com/u/66577?s=200&v=4"
                    text="Mickel Heal"
                    text1="New York USA" />

                <People textarea="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur sagittis felis non fermentum. Fusce sodales dui at urna fermentum aliquet.Praesent eget diam a lacus volutpat gravida nec in enim. Nam ultricies ante eu tellus finibus."
                    rasm="https://avatars1.githubusercontent.com/u/66577?s=200&v=4"
                    text="Tdrana"
                    text1="Bangladesh" />

            </div>
        </div>
        )
    }
}

export default Sms;