import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (<div style={{
            alignItems: 'center',
            background: '#fff3f1',
            border: '20px solid white',
            display: 'flex', flexDirection: 'row',
            height: 500, width: "100%",
            color: 'black', justifyContent: 'center'
        }}>

            <img src={require("./tuzumi.jpeg")}
                style={{
                    width: "45%", height: "65%", margin: 15
                }} />
            <div style={{ display: 'flex', flexDirection: 'column', width: "45%", height: "75%", margin: 10 }}>
                <div style={{ margin: 10 }}>
                    <h5 style={{ display: 'flex', fontSize: 15, color: 'red' }}>About Xavat</h5>
                    <h1 style={{ display: 'flex', fontSize: 40, width: 400 }}>Get Started With Our Software</h1>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', color: 'blue', margin: 10 }}>
                    <h8 style={{ fontSize: 10, margin: 5 }}>
                        Praesent eget diam a lacus volutpat gravida nec in enim. Nam ultricies ante eu tellus finibus, vitae tempus leo viverra. In volutpat justo volutpat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur sagittis felis non fermentum. Fusce sodales dui at urna fermentum aliquet.
                </h8>
                    <h8 style={{ fontSize: 10, margin: 5 }}>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis lorem mollis, pulvinar nisi at.
                        Praesent eget diam a lacus volutpat gravida nec in enim. Nam ultricies ante eu tellus finibus, vitae tempus leo viverra. In volutpat justo volutpat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur sagittis felis non fermentum. Fusce sodales dui at urna fermentum aliquet.
                </h8>
                    <h8 style={{ margin: 10 }}><a class="button is-danger is-rounded">GET STARTED NOW</a></h8>
                    <h8 style={{ display: 'flex', justifyContent: 'flex-end', color: 'white' }}>
                        <span class="button is-danger is-selected"
                            style={{ borderRadius: 100, }}>
                            <i class="fas fa-angle-double-up"></i>
                        </span>
                    </h8>
                </div>
            </div>
        </div>
        )
    }
}

export default About;