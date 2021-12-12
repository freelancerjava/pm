import React, { Component } from "react";
import { Redirect } from "react-router-dom";


// import { style } from "variables/Variables.jsx";
import { connect } from 'react-redux';
import MyMapComponent from "./MapContainer";
import Card from "./Card";
import AttachmentCard from "./Card/attachments";
import ActivityCard from "./Card/activity";
// import { Hero, Container, Tabs, Title, Button } from 'reactbulma'
import Header from "../../components/Header/Header";
import Routines from "../../common/api/routines";
import './styles.css'
import hourlyList from "../../common/reducers/hourlyList";
import LoadingOverlay from 'react-loading-overlay';

import Input from "../../components/Input/Input";
import { Field, reduxForm, SubmissionError } from "redux-form";

import Exception from "../../common/api/Exception";
import moment from 'moment'
import { history } from "../../common/createStore";



import './index.scss'
import styles from "react-loading-overlay/lib/styles";

import Chat from './chat/Chat'

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.chat = React.createRef();
        this.myMap = React.createRef();
        this.state = {
            activeTab: "info",
            menuActive: true,
            modalActive: false,
            delModalActive: false,
            selectedMarker: null,
            loginErr: false,
            deleting: 0,
            map: null,
            chat: true,
            chatOpen: false,
            loadId: 0,
            isPaused: false
        }

        this.renderModal = this.renderModal.bind(this)
        this.selectMarker = this.selectMarker.bind(this)
        this.setMap = this.setMap.bind(this)
        this.setChat = this.setChat.bind(this)
        this.setLoadId = this.setLoadId.bind(this)
        this.setChatOpen = this.setChatOpen.bind(this)
    }

    setChat(bool) {
        this.setState({ chat: bool })
    }

    setChatOpen(bool) {
        this.setState({ chatOpen: bool })
    }

    setLoadId(i) {
        this.setState({ loadId: i })
    }


    componentDidMount() {
        this.refresh()
        this.props.order.map((item) => {
            Routines.admin.hourlyList({
                request: {
                    id: item && item.id
                }
            }, this.props.dispatch)
            Routines.admin.attachmentList({
                request: {
                    id: item && item.id
                }
            }, this.props.dispatch)
        })

        const el = this.chat.current ? this.chat.current.getElement() : null

        this.setState({ map: this.map })

    }
    refresh() {
        setInterval(() => {
            if (!this.state.isPaused) {
                this.props.order.map((item) => {
                    // console.log("id", item.id)
                    Routines.admin.getLastRoute({
                        request: {
                            id: item && item.id
                        },
                        id: item && item.id
                    }, this.props.dispatch)
                    // Routines.admin.hourlyList({
                    //     request: {
                    //         id: item && item.id
                    //     }
                    // }, this.props.dispatch)
                    // Routines.admin.attachmentList({
                    //     request: {
                    //         id: item && item.id
                    //     }
                    // }, this.props.dispatch)
                })
            } else {
                this.setState({ isPaused: !this.state.isPaused})

            }

        }, 2000)
        // Routines.admin.routeList({request:{
        //         tracking_number:this.props.order.tracking_number
        //     }}, this.props.dispatch)
        // Routines.admin.orderDetail({request:{
        //         tracking_number:this.props.order.tracking_number
        //     }}, this.props.dispatch)
    }

    setMap(newMap) {
        this.setState({ map: newMap })
    }

    getAddress(position) {
        Routines.admin.geocoder({
            request: {
                lat: position.lat,
                long: position.lng,
                id: position.loadId
            }
        }, this.props.dispatch)
    }

    humburgerOnClick = (e) => {
        this.setState({ menuActive: !this.state.menuActive })
    }



    handleModalToggle = (e) => {
        this.setState({ modalActive: !this.state.modalActive })
    }

    handleDeleteModalToggle = (id) => {

        this.setState({
            delModalActive: !this.state.delModalActive,
            isPaused: !this.state.isPaused
        })

        if (id != 0) {
            this.setState({
                deleting: id
            })
            console.log("deleting ", id)
        } else {
            console.log("deleting 0", id)
            console.log("isPaused", this.state.isPaused)
            Routines.admin.deleteOrder({
                id: this.state.deleting
            }, this.props.dispatch)
            Routines.admin.deleteLastRoute({
                id: this.state.deleting
            }, this.props.dispatch)
            Routines.admin.deleteGeocoder({
                id: this.state.deleting
            }, this.props.dispatch)
            Routines.admin.deleteAttachment({
                id: this.state.deleting
            }, this.props.dispatch)
            Routines.admin.deleteHourlyList({
                id: this.state.deleting
            }, this.props.dispatch)
        }
    }

    onClick() {
        const { handleSubmit } = this.props
        let id
        return handleSubmit((data) => {
            if (data.order_number && data.tracking_code)
                return Routines.admin.orderDetail({
                    request: {
                        order_number: data.order_number,
                        tracking_code: data.tracking_code
                    }
                }, this.props.dispatch)
                    .then(() => {
                        // console.log(this.props.order)
                        this.setState({ loginErr: false })
                        this.props.order.map((item) => {
                            Routines.admin.getLastRoute({
                                request: {
                                    id: item && item.id
                                }
                            }, this.props.dispatch)
                            Routines.admin.hourlyList({
                                request: {
                                    id: item && item.id
                                }
                            }, this.props.dispatch)
                            Routines.admin.attachmentList({
                                request: {
                                    id: item && item.id
                                }
                            }, this.props.dispatch)
                            id = item && item.id
                        })


                    }).then(() => {
                        setTimeout(() => {
                            this.setState({ modalActive: false })
                            this.selectMarker(id)
                        }, 2000)

                        // history.push("#/dashboard");
                        // window.location.reload();
                    })
                    .catch(e => {
                        this.setState({ loginErr: true })
                        if (e instanceof Exception.ValidationException) {
                            throw new SubmissionError(e.errors)
                        }
                        throw e
                    })
        })()
    }

    renderModal() {
        return (
            <div className={this.state.modalActive ? "modal is-active" : "modal"}>
                <div className="modal-background modal-bg"
                    onClick={(e) => {
                        this.handleModalToggle(e)
                    }}></div>
                <div className="modal-card ">
                    <section className="home text-center modal-card-body rounded-corners">
                        <div className="hero-content wow fadeIn">
                            <h1>Freight Tracking</h1>
                            <p>
                                Enter your order number and tracking number to get
                                real-time data on the status of your shipment.</p>
                            <div className={this.state.loginErr ? "login-error show" : "login-error"}>Tracking code or Order number wrong!</div>
                            <div className="form wow fadeIn" data-wow-delay="0.2s">
                                <form
                                    id="chimp-form"
                                    className="subscribe-form wow zoomIn"
                                    action="assets/php/subscribe.php"
                                    method="post"
                                    acceptCharset="UTF-8"
                                    encType="application/x-www-form-urlencoded"
                                    autoComplete="off"
                                    noValidate
                                >
                                    <Field
                                        name={"tracking_code"}
                                        placeholder={"Your tracking code"}
                                        component="input"
                                        type={"text"}
                                    />
                                    <br />

                                    <Field
                                        name={"order_number"}
                                        placeholder={"Your order id"}
                                        component="input"
                                        type={"text"}
                                    />

                                    <button
                                        disabled={this.props.spinner}
                                        onClick={e => {
                                            e.preventDefault();
                                            this.onClick();
                                        }}
                                        className={`submit-button`}
                                    >
                                        {this.props.spinner
                                            ? "Submitting..."
                                            : "Authentication"}
                                    </button>
                                    <p className={"has-text-danger is-size-5 title"}>
                                        {this.props.loginError}
                                    </p>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }

    selectMarker(id) {
        let center = this.props.lastRoute.filter((item, index) => {
            return item.loadId === id
        })[0]

        this.setState({ selectedMarker: center })

        this.state.map.panTo(center) && console.log("this.myMap", center)

    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        if (false) return <Redirect to={from} />;
        let { order, locationsEveryHour, lastRoute, geocoder, attachmentList } = this.props
        // console.log("order", order)
        // console.log("locationsEveryHour", locationsEveryHour)
        // console.log("lastRoute", lastRoute)
        // console.log("geocoder", geocoder)
        // console.log("attachmentList", attachmentList)
        let isActive = !(lastRoute.id)
        return (
            <LoadingOverlay
                active={false}
                spinner
                text='Loading your content...'
            >
                {this.renderModal()}

                <DeleteModal handleToggle={this.handleDeleteModalToggle} visible={this.state.delModalActive} deleting={this.state.deleting} />

                <Chat
                    order={order}
                    lastRoute={lastRoute}
                    chat={this.state.chat}
                    loadId={this.state.loadId}
                    chatOpen={this.state.chatOpen}
                    setChat={this.setChat}
                    setLoadId={this.setLoadId}
                    setChatOpen={this.setChatOpen}
                />



                <div className="columns">
                    <div className={"column is-4 blur-bg navigation nav-is-active"} style={{ height: "104vh" }}>

                        <div className="levitate-body">
                            <div className="">
                                <div className="fab-logo">
                                    <i><img
                                        draggable="false"
                                        src={require('../../components/images/logo.png')} /></i>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                            <div className="new-load">
                                <a href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.handleModalToggle(e)
                                    }}><span className="add-load">All loads</span></a>
                                <a href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.handleModalToggle(e)
                                    }}><span>Add new <i className="fa ">+</i></span></a>
                            </div>

                        </div>

                        <div className="div-scroll">

                            {
                                order.map((item, index) => {
                                    // console.log("lastRoute", this.props.lastRoute[index])
                                    // console.log("lastRoute", moment().diff(moment(lastRoute[index].createdAt)))
                                    return (
                                        <LeftTabs selected={1}
                                            key={index}
                                            first_name={item.user.first_name}
                                            last_name={item.user.last_name}
                                            selectMarker={this.selectMarker}
                                            markerId={item.id}
                                            online={
                                                lastRoute.filter(it => item.id == it.loadId)[0] && (moment().diff(moment(lastRoute.filter(it => item.id == it.loadId)[0].createdAt)) < 10 * 60 * 1000)}
                                        >
                                            <Panel title="Info" >
                                                <Card
                                                    setChatOpen={this.setChatOpen}
                                                    setChat={this.setChat}
                                                    setLoadId={this.setLoadId}
                                                    data={item}
                                                    geocoder={geocoder.filter(it => item.id == it.id)[0]}
                                                    handleDeleteModalToggle={this.handleDeleteModalToggle} />
                                            </Panel>
                                            <Panel title="Activity"><ActivityCard data={locationsEveryHour.filter(it => item.id == it.id)[0] && locationsEveryHour.filter(it => item.id == it.id)[0].data} /></Panel>
                                            <Panel title="Documents"><AttachmentCard data={attachmentList.filter(it => item.id == it.id)[0] && attachmentList.filter(it => item.id == it.id)[0].data} /></Panel>
                                        </LeftTabs>
                                    )
                                })
                            }

                        </div>



                        <div className="logout">
                            <a href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    this.props.history.push("/");
                                }}>
                                <span><img src={"./logout.svg"} />Logout</span>
                            </a>
                        </div>

                    </div>

                    <MyMapComponent
                        ref={(ref) => {
                            this.map = ref;
                        }}
                        selectMarker={this.selectMarker}
                        setMapRef={this.setMap}
                        data={lastRoute}
                        locationsEveryHour={locationsEveryHour}
                        getAddress={(position) => this.getAddress(position)}
                        geocoder={geocoder}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBtSdppaUzfUPyPIglmqFnN1hKCVd__TP8"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div className="column is-8" style={{ height: `104vh`, padding: 0 }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        selectedMarker={this.state.selectedMarker}

                    />
                </div>

            </LoadingOverlay>
        );
    }
}

class LeftTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }
    render() {
        return (<div style={{ margin: 8 }}>
            <details>
                <summary
                    onClick={() => {
                        this.props.selectMarker(this.props.markerId)
                        // console.log("markerId",this.props.markerId)
                    }}
                    style={{ textTransform: 'uppercase', display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {this.props.online ?
                        <span className="online"></span>
                        : <span className="offline"></span>}
                    <span>{this.props.first_name}</span>
                    <span>{this.props.last_name}</span>

                    <span
                        onClick={() => {
                            // this.selectMarker(item.id)
                        }}
                    >
                        <i className="fa fa-angle-down"></i>
                    </span>
                </summary>

                <div className="tabs is-centered  " style={{ marginTop: 16, marginBottom: 0, flexDirection: 'column', display: 'flex' }}>
                    <ul className="tabs-ul equal-tabs">
                        {this.props.children.map((elem, index) => {
                            let style = index === this.state.selected ? 'c-blue' : 'c-gray';
                            return <li className={style} key={index} onClick={this.handleChange.bind(this, index)}><a>{elem.props.title}</a></li>
                        })}
                    </ul>
                </div>


                <div className="tab table-scroll">{this.props.children[this.state.selected]}</div>
            </details>
        </div >
        )
    }
    handleChange(index) {
        this.setState({ selected: index })
    }
}

class Panel extends React.Component {
    render() {
        return <div>{this.props.children}</div>
    }
}

class DeleteModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    handleModalToggle = (e) => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        return (
            <div className="del-modal">
                <div className={this.props.visible ? "modal is-active" : "modal"}>
                    <div className="modal-background modal-bg"
                        onClick={(e) => {
                            this.props.handleToggle()
                        }}></div>
                    <div className="modal-card ">
                        <section className="home text-center modal-card-body rounded-corners">
                            <div>
                                Are you sure want to delete?
                        </div>
                            <div className="btns">
                                <a href="#" className="yes-btn"
                                    onClick={(e) => {
                                        e.preventDefault();

                                        this.props.handleToggle(0)
                                    }}>Yes</a>
                                <a href="#" className="no-btn"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.props.handleToggle()
                                    }}>No</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

const _Login = reduxForm({
    form: 'login',
    enableReinitialize: false
})(Dashboard);
const mapStateToProps = (state) => {
    // console.log("state", state)
    return {
        order: state.order.order,
        tracking: state.routeList.tracking,
        locationsEveryHour: state.hourlyList.hourlyData,
        spinner: state.temp.spinner,
        lastRoute: state.lastRoute.data,
        geocoder: state.geocoder.geodata,
        attachmentList: state.attachmentList.data,
    };
};

export default connect(mapStateToProps)(_Login);
