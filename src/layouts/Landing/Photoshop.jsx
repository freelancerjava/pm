import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photoshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (<div style={{border: '20px solid white',
            display: 'flex', flexDirection: 'column',
            width: "100%", height: 560, background: '#dcd7ec',
        }}>
            <div style={{
                display: 'flex', flexDirection: 'column',
                height: 120, alignItems: 'center',
                justifyContent: 'space-around', margin: 30
            }}>
                <p style={{ textAlign: 'center', fontSize: 30 }}>STAY UPDATED ON ALL DEVICES</p>
                <p style={{ textAlign: 'center', fontSize: 15, width: 700 }}>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctir aliquet. Aenean sollicitdin, lorem quis bibendum auctor, nisi elit consequat ipsum.
            </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center',}}>
                <img src={require("./nimagaaap.jpeg")}
                    style={{ width: 700, height: 300 }} />
            </div>
        </div>
        )
    }
}

export default Photoshop;