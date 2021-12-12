import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Download extends Component {
    render() {
        return (<section className="hero">
            <div style={{ display: 'flex', flexDirection: 'column', height: 400, background: "hsl(171, 100%, 41%)", color: "white", justifyContent: 'space-around' }}>
                <div style={{
                    display: 'flex', flexDirection: 'column',height:120,
                    alignItems: 'center',justifyContent:'space-around',margin:30
                }}>
                    <h1 style={{textAlign:'center',fontSize:40,margin:10}}>Coming Soon</h1>
                    <p style={{ textAlign: 'center', width: 550,fontSize:17, }}>
                        $this is the best software platform for running an internet business.
                        We handle billions of dollars every year for forward-thinking businesses around the world.
                    </p>
                </div>
                <div style={{display:'flex',flexDirection:'row',fontSize:20,
                            height:100,justifyContent:'space-around'}}>
                    <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                        <h1>TOTAL DOWNLOAD</h1>
                        <h1 style={{fontSize:40}}>1100</h1>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                        <h1>HAPPY CLIENTS</h1>
                        <h1 style={{fontSize:40}}>699</h1>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                        <h1>ACTIVE INSTALL</h1>
                        <h1 style={{fontSize:40}}>789</h1>
                    </div>
                </div>
                <div style={{
                    display: 'flex', flexDirection: 'row',margin:30,
                    justifyContent: 'center',
                }}>
                    <Link to={'/vaqt'}>
                        <img src={require("./apple_app_store.png")} width="212" style={{ margin: 10 }} />
                    </Link>
                    <Link to={'/home'}>
                        <img src={require("./google_play_store.png")} width="212" style={{ margin: 10 }} />
                    </Link>
                </div>
            </div>
        </section>
        )
    }
} 