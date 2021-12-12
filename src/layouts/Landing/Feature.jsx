import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let { title, text, icon } = this.props
        return (<div style={{ display:'flex',flexDirection:'column',
                    alignItems:'center',width:"100%",height:300,justifyContent:'center' }}>
            <div style={{fontSize:50}}>
                <span class="icon">
                    <i class={`fab ${icon}`}></i>
                </span>
            </div>
            <div style={{ maxWidth: 250 }}>
                <h5 style={{ color: 'black' }}>{title}</h5>
            </div>
            <div>
                <p style={{ color: 'black',textAlign:'center' }}>{text}</p>
            </div>
        </div>
        )
    }
}

export default Feature;