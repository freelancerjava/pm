import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Feature from './Feature';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feat: [
                {
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur sagittis felis non fermentum. Fusce sodales dui at urna fermentum aliquet.",
                    icon: "fa-sketch",
                    title: "Sequred Design"
                },{
                    text: "Praesent eget diam a lacus volutpat gravida nec in enim. Nam ultricies ante eu tellus finibus, vitae tempus leo viverra. In volutpat justo volutpat.",
                    icon: "fa-invision",
                    title: "Unique Layouts"
                },{
                    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis lorem mollis, pulvinar nisi at.",
                    icon: "fa-adobe",
                    title: "Easy Customized"
                }
            ]
        }
    }
    render() {
        let { title, text, icon } = this.state
        return (
            <div class="columns">
              {this.state.feat.map((f) => {
                return (<div class="column">
                    <Feature {...f} />
                </div>
                )
            })}
            </div>
        )
    }
}

export default Features;