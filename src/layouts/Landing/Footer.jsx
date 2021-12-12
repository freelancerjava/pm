import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (<div style={{
            display: 'flex', flexDirection: 'row',
            background: 'hsl(171, 100%, 41%)', color: 'white',
            height: 300, width: "100%", padding: 60, justifyContent: 'space-around'
        }}>
            <div style={{
                display: 'flex', flexDirection: 'column',
                flexWrap: 'wrap', width: "30%",
            }}>
                <h1 style={{ fontSize: 25 }}>About Doxy</h1>
                <h4>Doxy is a minimal support and document based website template. It has all the modern features for the digital product authors who wants to make their product's documentation website.</h4>
            </div>
            <div style={{
                display: 'flex', flexDirection: 'column',
                flexWrap: 'wrap', width: "20%",
            }}>
                <h1 style={{ fontSize: 25 }}>Pages</h1>
                <h4>Testimonial</h4>
                <h4>Privacy Policy</h4>
                <h4>Support Topic</h4>
                <h4>Blog</h4>

            </div>
            <div style={{
                display: 'flex', flexDirection: 'column',
                flexWrap: 'wrap', width: "20%"
            }}>
                <h1 style={{ fontSize: 25 }}>Get Help</h1>
                <h4>Support</h4>
                <h4>Supmit Ticket</h4>
                <h4>Register</h4>
                <h4>Login</h4>
            </div>
            <div style={{
                display: 'flex', flexDirection: 'column',
                flexWrap: 'wrap', width: "20%"
            }}>
                <h1 style={{ fontSize: 25 }}>Follow Us</h1>
                <p style={{fontSize:17}}><i class="fab fa-instagram"></i> instagram</p>
                <p style={{fontSize:17}}><i class="fab fa-facebook"></i> facebook</p>
                <p style={{fontSize:17}}><i class="fab fa-facebook-messenger"></i> messenger</p>
                <p style={{fontSize:17}}><i class="fab fa-twitter"></i> twitter</p>
                <p style={{fontSize:17}}><i class="fab fa-telegram"></i> telegram</p>
                <p style={{fontSize:17}}><i class="fab fa-amazon"></i> amazon</p>
                <p style={{fontSize:17}}><i class="fab fa-ebay"></i> ebay</p>
            </div>
        </div>
        )
    }
}

export default Footer;