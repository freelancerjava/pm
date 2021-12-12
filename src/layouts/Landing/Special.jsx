import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { blue } from 'ansi-colors';
import './styles.css'
class Special extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (<div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', }}>

            <div style={{
                display: 'flex', flexDirection: 'column',
                height: 120, alignItems: 'center',
                justifyContent: 'space-around', margin: 30
            }}>

                <h1 style={{ fontSize: 40, }}>Special Features</h1>
                <p style={{ textAlign: 'center', width: 400, fontSize: 17 }}>Lorem ipsum or lipsum as it is sometimes known is a text usedin laying out print,graphic</p>
            </div>

            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', width: "100%", height: 400, justifyContent: 'center', }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: 350 }}>
                    <div style={{ fontSize: 12, margin: 15 }}>
                        <div class="card"  className="text">
                            <div class="card-content" >
                                <div class="media" style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                                    <div class="media-left">
                                        <figure class="image gradient iconExtraStyle">

                                            <p style={{ fontSize: 35, color: "white", textAlign: 'center', }}>
                                                <i class="fas fa-sad-cry"></i>
                                            </p>

                                        </figure>
                                    </div>
                                    <div>
                                        <div class="media-content">
                                            <p class="title is-4" style={{ fontSize: 20 }}>User Friendly</p>
                                        </div>
                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ fontSize: 12, margin: 15 }}>
                        <div class="card"  className="text">
                            <div class="card-content">
                                <div class="media" style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                                    <div class="media-left">
                                        <figure class="image gradient iconExtraStyle">
                                            <p style={{ fontSize: 35,color: "white", textAlign: 'center', }}><i class="fas fa-angry"></i></p>
                                        </figure>
                                    </div>
                                    <div>
                                        <div class="media-content">
                                            <p class="title is-4" style={{ fontSize: 20 }}>Free Support</p>
                                        </div>
                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div  style={{ display: 'flex', justifyContent: 'center', }}>
                    <img src={require("./Iphone.jpeg")}
                        style={{ width: 200, height: 400, margin: 30 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: 350 }}>
                    <div style={{ fontSize: 12, margin: 15 }}>
                        <div class="card"  className="text">
                            <div class="card-content">
                                <div class="media" style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                                    <div class="media-left">
                                        <figure class="image gradient iconExtraStyle">
                                            <p style={{ fontSize: 35, color: "white", textAlign: 'center',}}><i class="fas fa-grin-beam-sweat"></i></p>
                                        </figure>
                                    </div>
                                    <div>
                                        <div class="media-content">
                                            <p class="title is-4" style={{ fontSize: 20 }}>24/7 Support</p>
                                        </div>
                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style={{ fontSize: 12, margin: 15 }}>
                        <div class="card"  className="text">
                            <div class="card-content">
                                <div class="media" style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                                    <div class="media-left">
                                        <figure class="image gradient iconExtraStyle">
                                            <p style={{ fontSize: 35, color: "white", textAlign: 'center', }}><i class="fas fa-smile-wink"></i></p>
                                        </figure>
                                    </div>
                                    <div>
                                        <div class="media-content">
                                            <p class="title is-4" style={{ fontSize: 20 }}>Unlimited Features</p>
                                        </div>
                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Special; 