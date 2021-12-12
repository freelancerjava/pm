import React, { Component } from 'react';
import Download from './Download';
import Contact from './Contact';
import index from '../Login/index';
import { Link } from 'react-router-dom';
import Feature from './Feature';
import Features from './Features';
import Footer from './Footer'
import Subscribe from './Subscribe';
import About from './About';
import Photoshop from './Photoshop';
import Special from './Special';
import Sms from './Sms';
import Katalog from './Katalog';

export default class LoginScreen extends Component {
    render() {
        return (<section className="hero">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src={require("./pm-logo.png")} width="62" height="28" />
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" onClick={(() => {
                            this.props.history.push("/home")
                        })}>
                            Home
        </a>
                        <a className="navbar-item" onClick={(() => {
                            this.props.history.push("/dokumentation")
                        })}>
                            Documentation
        </a>
                        <a className="navbar-item" onClick={(() => {
                            this.props.history.push('/contact')
                        })}>
                            Contact
        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
        </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
        </a>
                                <a className="navbar-item">
                                    Jobs
        </a>
                                <a className="navbar-item">
                                    Contact
        </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
        </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" onClick={(() => {
                                    this.props.history.push('/download')
                                })}>
                                    Download
        </a>
                                <a className="button is-light" onClick={(() => {
                                    this.props.history.push('/login')
                                })}>
                                    Log in
        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 300, flex: 1 }}>
                <img src={require("./peterbilt.png")}
                    style={{
                        zIndex: 0, width: 700, height: 300,
                        position: "absolute",
                    }} />

                <div style={{ display: 'flex', alignSelf: 'flex-end', flexDirection: 'column', marginRight: 500, width: 150, }}>
                    <a class="button is-warning" style={{ marginBottom: 10 }} >Request a Quote</a>
                    <a class="button is-primary" >Pricing details</a>
                </div>
            </div>
            <Katalog/>
            <Sms />
            <Special />
            <Photoshop />
            <About />
            <Subscribe />
            <Download />
            <Features/>
            <Footer />

        </section>)
    }
}