import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (<div style={{
            display: 'flex', flexDirection: 'column',
            height: 400, width: "100%",
            textAlign: 'center', margin: 40
        }}>
            <div style={{
                display: 'flex', flexDirection: 'column',
                height: 120, alignItems: 'center',
                justifyContent: 'space-around', margin: 30
            }}>

                <h1 style={{ fontSize: 40, }}>Subscribe To Newsletter</h1>
                <p style={{ textAlign: 'center', width: 400, fontSize: 17 }}>Lorem ipsum or lipsum as it is sometimes known is a text usedin laying out print,graphic</p>
            </div>
            <div style={{
                display: 'flex', flexDirection: 'row',
                height: 120, alignItems: 'center',
                justifyContent: 'space-around',
            }}>
                <div class="field">
                    <div class="control">
                        <input class="input is-primary" type="text"
                            placeholder="Enter your email here"
                            style={{ width: 300 }} />
                        <a class="button is-primary">Subscribe</a>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex', flexDirection: 'row',
                height: 120,fontSize:17,justifyContent:'center'
            }}>
                <i class="fab fa-facebook" style={{margin:5}}></i>
                <i class="fab fa-instagram" style={{margin:5}}></i>
                <i class="fab fa-twitter" style={{margin:5}}></i>
                <i class="fab fa-telegram" style={{margin:5}}></i>
            </div>

        </div>
        )
    }
}

export default Subscribe;