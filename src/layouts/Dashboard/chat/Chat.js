import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools'

import ScrollContainer from 'react-indiana-drag-scroll'

import moment from 'moment'

import './style.scss'

import check from './svg/check.svg'
import call from './svg/call.svg'
import back from './svg/back.svg'
import more from './svg/more.svg'
import send from './svg/send.svg'

const chatList = require('./chat.json')


const myFetch = async (query) => {

    let url = "http://pointmax-api.herokuapp.com/api/messages"
    if (query !== '0') url = 'http://pointmax-api.herokuapp.com/api/messages?filter=' + JSON.stringify({ "where": { "loadId": query } })
    const response = await fetch(url)
    const data = await response.json();
    let filtered = []

    if (query === '0') {
        data.slice(0).reverse().map((item, index) => {
            let fItem = {
                loadId: item.loadId,
                item
            }
            let flag = false
            filtered.map((innerItem, index) => {
                if (innerItem.loadId == fItem.loadId) {
                    innerItem = fItem
                    flag = true
                }
            })
            if (!flag) filtered.push(fItem)
        })
        return filtered
    }
    return data
}


const renderConversetionList = (data, chat, setChat, setLoadId, lastRoute) => {
    return (
        <div className="chat-list">
            <div className="title">Chat</div>
            <div className="chat-count">{data.length} chats</div>
            <div className="c-list">
                {

                    data.map((item, index) => {
                        let initem = item.item
                        let online = (moment().diff(moment(this.props.data[index].createdAt)) < 10 * 60 * 1000)
                        //console.log("moment(lastRoute[index].createdAt).fromNow()", moment(lastRoute[index].createdAt).fromNow())
                        return (
                            <div className="item" onClick={() => {
                                setChat(!chat)
                                setLoadId(initem.loadId)
                            }}>
                                <div className="item-title">
                                    {online && <span className="online"></span>}
                                    <div className="item-name">{item.user.first_name} <span className="item-order">{item.order_number}</span></div>
                                    <div className="item-time">{initem.receiverId == initem.loadId && <img src={check} />}{moment(initem.createdAt).fromNow()}</div>
                                </div>
                                <div className="item-content">
                                    <div>{initem.receiverId == initem.loadId && <span className="item-author"> You:</span>}{initem.text}</div>
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

const renderConversetion = (chat, setChat, loadId, setLoadId, data, newData, lastRoute) => {
    let online = false;

    let extraData = newData.filter((item, index) => {
        online = (moment().diff(moment(lastRoute[index].createdAt)) < 10 * 60 * 1000)
        return item.id == data[0].loadId
    })[0]
    let user = extraData && extraData.user

    return (
        <div className="conv">
            <div className="header">
                <div className="back" onClick={() => {
                    setChat(!chat)
                    setLoadId('0')
                }}><img src={back} /></div>
                <div className="title">
                    <div className="name">{user && user.first_name} {user && user.last_name}</div>
                    {online ? <div className="onlinet">online</div> : <div className="offlinet">offline</div>}
                </div>
                <div className="menu">
                    <div className="call"><img src={call} /></div>
                    <div className="more"><img src={more} /></div>
                </div>
            </div>
            <div className="chat-content">
                <MyScroll className="scroll-container">
                    {
                        data && data.map((item, index) => {
                            return (
                                <div className={item.receiverId == item.loadId ? "chat-item outgoing" : "chat-item"}>
                                    <div className="chat-row">
                                        <div className="body">
                                            <div className="chat-text">{item.text}</div>
                                            <div className="time">{moment(item.createdAt).fromNow()}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </MyScroll>
            </div>
            <Input loadId={loadId} />

        </div>

    )
}

const sendMessage = (text, loadId) => {
    const data = {
        text,
        "type": "string",
        "read": false,
        "userId": 0,
        "receiverId": loadId,
        loadId
    }
    fetch('http://pointmax-api.herokuapp.com/api/messages', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

const Exchange = (props) => {

    const { loadId, setLoadId } = props
    const { chat, setChat } = props
    const { chatOpen, setChatOpen } = props

    const { status, data, error, isFetching } = useQuery(loadId, myFetch, { refetchInterval: 3000 })

    let orderData = props.order;
    let newData = []
    orderData.map((item, index) => {
        data && data.slice(0).reverse().map((innerItem, index) => {
            if (item.id == innerItem.loadId) {
                newData.push({ ...item, ...innerItem })
            }
        })
    })

    // console.log(data, newData)

    return (
        <div>
            <div className="fab-wrapper">
                <input id="fabCheckbox" type="checkbox" className="fab-checkbox" checked={chatOpen} />
                <label className="fab" onClick={() => {
                    setChatOpen(!chatOpen)
                }}>
                    <img className="close-fab" src={"./chatfabclose.svg"} />
                    <img className="open-fab" src={"./chatfab.svg"} />
                </label>
                <div className="fab-wheel">

                    {chat && renderConversetionList(newData, chat, setChat, setLoadId, props.lastRoute)}
                    {!chat && renderConversetion(chat, setChat, loadId, setLoadId, data, newData, props.lastRoute)}
                </div>
            </div>
        </div>
    )
}



class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
    render() {
        return (
            <div className="input-field">
                <input type="text" ref="tf" value={this.state.text}
                    placeholder="Type something..."
                    onChange={event => this.setState({ text: event.target.value })}
                    onKeyUp={(e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault();
                            this.input.click();
                        }
                    }}></input>
                <img src={send} ref={(ref) => {
                    this.input = ref
                }} onClick={() => {
                    // console.log("tf", this.refs.tf.value)
                    if (this.state.text !== "") {
                        sendMessage(this.state.text, this.props.loadId)
                        this.setState({ text: "" })
                    }
                }} />
            </div>
        )
    }
}

class MyScroll extends Component {
    constructor(props) {
        super(props)
        this.container = React.createRef();
        this.state = {
            scroll: false,
            height: 0
        }
    }

    componentDidMount() {
        const element = this.container.current ? this.container.current.getElement() : null;
        if (element) {
            element.scrollTop = element.scrollHeight;
            this.setState({ height: element.scrollHeight })
        }
    }

    componentDidUpdate() {
        const element = this.container.current ? this.container.current.getElement() : null;
        if (element && this.state.height != element.scrollHeight) {
            element.scrollTop = element.scrollHeight;
            this.setState({ height: element.scrollHeight })
        }
    }

    render() {
        return (
            <ScrollContainer
                ref={this.container}
            // onScroll={() => {
            //     // this.setState({ scroll: true })
            // }}
            // onScrollStart={() => {
            //     this.setState({ scroll: true })
            // }}
            // onScrollEnd={() => {
            //     this.setState({ scroll: false })
            // }}
            >
                {this.props.children}
            </ScrollContainer>
        )
    }
}

export default (props) => {
    return (
        <>
            <Exchange
                chat={props.chat}
                chatOpen={props.chatOpen}
                loadId={props.loadId}
                setChat={props.setChat}
                setChatOpen={props.setChatOpen}
                setLoadId={props.setLoadId}
                order={props.order}
                lastRoute={props.lastRoute}
            />
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    )
}

