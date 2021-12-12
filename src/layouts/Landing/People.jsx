import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

class People extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let { textarea, rasm, text, text1 } = this.props
        return (
            <div class="field" className="text" style={{ margin: 30 }}>
                <div class="control">
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <textarea style={{ width: 350, height: 100 }}>{textarea}</textarea>
                        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                            <img src={rasm} style={{ borderRadius: 100, width: 50, height: 50 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', width: 100 }}>
                                <p>{text}</p>
                                <p>{text1}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default People;