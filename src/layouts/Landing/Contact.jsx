import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { green } from 'ansi-colors';
import Feature from './Feature'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (<div>
            <div style={{   display: 'flex', flexDirection: 'row',
                            margin: 5, alignItems: 'center', justifyContent: 'center'
            }}>
                <img src={"https://avatars1.githubusercontent.com/u/66577?s=200&v=4"}
                    style={{ borderRadius: 100, width: 100, height: 100, margin: 20 }} />

                <div className="box">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input className="input" type="text" placeholder="Enter your name" />
                            </p>
                        </div>
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input className="input" type="text" placeholder="Enter your email" />
                            </p>
                        </div>
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input className="input" type="text" placeholder="Enter your address" />
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                        <p className="control">
                            <a className="button is-info">
                                It matters to me
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div class="columns">
                <div class="column">
                    <Feature icon="fa-home" title="Hello" text="so anti-pattern and get all yuor ducksso anti-pattern and get all yuor ducks" />
                </div>
                <div class="column">
                    <Feature icon="fa-home" title="Hello" text="so anti-pattern and get all yuor ducksso anti-pattern and get all yuor ducks" />
                </div>
                <div class="column">
                    <Feature icon="fa-home" title="Hello" text="so anti-pattern and get all yuor ducksso anti-pattern and get all yuor ducks" />
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <Feature icon="fa-home" title="Hello" text="so anti-pattern and get all yuor ducksso anti-pattern and get all yuor ducks" />
                </div>
                <div class="column">
                    <Feature icon="fa-home" title="Hello" text="so anti-pattern and get all yuor ducksso anti-pattern and get all yuor ducks" />
                </div>
                <div class="column">
                    <Feature icon="fa-home" title="Hello" text="so anti-pattern and get all yuor ducksso anti-pattern and get all yuor ducks" />
                </div>
            </div>
        </div>
        )
    }
}
export default Contact;