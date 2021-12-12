import React, { Component } from "react";
import {Hero, Container, Title, SubTitle, Heading, Button} from 'reactbulma'
import {connect} from "react-redux";
import Routines from "../../common/api/routines";
class Header extends Component {
    constructor(props) {
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false
        };
    }

    mobileSidebarToggle(e) {
        if (this.state.sidebarExists === false) {
            this.setState({
                sidebarExists: true
            });
        }
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function () {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    }
    refresh(){
        Routines.admin.getLastRoute({request:{
            id:this.props.order.id
            }}, this.props.dispatch)
        Routines.admin.orderDetail({request:{
                id:this.props.order.id
            }}, this.props.dispatch)
    }


    render() {
        return (
            <Hero>
                <Heading>
                    <Container className={'columns is-vcentered is-marginless'}>
                        <div className={`column is-11`}>
                            <Title>
                                PointMax
                            </Title>
                            <SubTitle>
                                realtime tracking
                            </SubTitle>
                        </div>
                        <div className={'field is-grouped columns is-marginless'}>
                            <Button disabled={this.props.spinner} onClick={(e)=>{
                                e.preventDefault()
                                this.refresh()
                            }} className={`button brand-color is-block control`}>Refresh</Button>
                            <Button onClick={(e)=>{
                                e.preventDefault()
                                this.props.history.push("/");
                            }} className={`button brand-color is-block`}>Logout</Button>
                        </div>
                    </Container>
                </Heading>
            </Hero>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.order.order,
        markersPosition: state.order.markersPosition,
        tracking: state.routeList.tracking,
        spinner: state.temp.spinner
    };
};

export default connect(mapStateToProps)(Header);