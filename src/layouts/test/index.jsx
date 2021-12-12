import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";

import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

import '../Dashboard/chat/style.scss'

import check from '../Dashboard/chat/svg/check.svg'
import call from '../Dashboard/chat/svg/call.svg'
import back from '../Dashboard/chat/svg/back.svg'
import more from '../Dashboard/chat/svg/more.svg'
import send from '../Dashboard/chat/svg/send.svg'

const chatList = require('../Dashboard/chat/chat.json')


const myFetch = async (query) => {
    // const response = await fetch(`http://pointmax-api.herokuapp.com/api/messages?filter=` + JSON.stringify({ "where": { "id": 1 } }))
    const response = await fetch('http://pointmax-api.herokuapp.com/api/messages?filter=' + JSON.stringify({ "where": { "loadId": query } }))
    const data = await response.json();
    let filtered = []

    data.map((item, index) => {

    })
    return data
}


const renderConversetionList = (data, chat, setChat) => {
    return (
        <div className="chat-list">
            <div className="title">Chat</div>
            <div className="chat-count">{data.length} chats</div>
            <div className="c-list">

                {
                    data.map((item, index) => {
                        return (
                            <div className="item" onClick={() => {
                                setChat(!chat)
                            }}>
                                <div className="item-title">
                                    {item.online && <span className="online"></span>}
                                    <div className="item-name">{item.name} <span className="item-order">{item.order}</span></div>
                                    <div className="item-time">{item.outgoing && <img src={check} />}{item.time}</div>
                                </div>
                                <div className="item-content">

                                    <div>{item.outgoing && <span className="item-author"> You:</span>}{item.text}</div>
                                    {item.new > 0 ? <span className="new-push">{item.new}</span> : ""}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

const renderConversetion = (chat, setChat) => {
    var text = "";
    return (
        <div className="conv">
            <div className="header">
                <div className="back" onClick={() => {
                    setChat(!chat)
                }}><img src={back} /></div>
                <div className="title">
                    <div className="name">Francisco Russell</div>
                    <div className="onlinet">online</div>
                </div>
                <div className="menu">
                    <div className="call"><img src={call} /></div>
                    <div className="more"><img src={more} /></div>
                </div>
            </div>
            <div className="chat-content">

                <div className="chat-item outgoing">
                    <div className="chat-row">
                        <div className="body">
                            <div className="chat-text">Some random text</div>
                            <div className="time">17:05</div>
                        </div>
                    </div>
                </div>

                <div className="chat-item">
                    <div className="chat-row">
                        <div className="body">
                            <div className="chat-text">Some random text text text text text text</div>
                            <div className="time">17:05</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Type something..." onChange={event => text = event.target.value}></input>
                <img src={send} onClick={() => {
                    // console.log("tf", this.refs.tf.value)
                    sendMessage(text)
                }} />
            </div>
        </div>

    )
}

const sendMessage = (text) => {
    const data = {
        text,
        "type": "string",
        "read": false,
        "userId": 0,
        "receiverId": 35,
        "loadId": 35,
        "createdAt": "2020-03-22T18:59:34.919Z",
        "updatedAt": "2020-03-22T19:31:19.319Z"
    }
    fetch('http://pointmax-api.herokuapp.com/api/messages', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    // this.props.setLoad(34)

}

const Exchange = () => {

    const [loadId, setLoadId] = useState(35)
    const [chat, setChat] = useState(true)

    const { status, data, error, isFetching } = useQuery(loadId, myFetch, { refetchInterval: 3000 })
    console.log("data", data)

    if (status === "loading") return <div>"loading"</div>
    if (status === "error") return <div>error {error}</div>
    return (
        <div>
            <div className="fab-wrapper">
                <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
                <label className="fab" for="fabCheckbox" onClick={() => {
                }}>
                    <img className="close-fab" src={"./chatfabclose.svg"} />
                    <img className="open-fab" src={"./chatfab.svg"} />
                </label>
                <div className="fab-wheel">

                    {chat && renderConversetionList(data, chat, setChat)}
                    {!chat && renderConversetion(chat, setChat)}
                </div>
            </div>

            {
                data && data.map((item, index) => {
                    return (
                        <div>{item.text}</div>
                    )
                })
            }

            <button onClick={() => {
                setLoadId(34)
            }}>34</button>

            <button onClick={() => {
                setLoadId(35)
            }}>35</button>
        </div>
    )
}

export default () => {
    return (
        <>
            <Exchange />
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    )
}

