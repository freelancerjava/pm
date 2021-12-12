import React, {Component} from "react";
import {Routines} from 'common/api';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";


class HeaderLinks extends Component {

    logoutUser = () => {
        const {dispatch} = this.props
        Routines.admin.logoutUser({}, dispatch)
    }


    render() {

        return (
            <div>
            </div>
        );
    }
}

export default connect()(HeaderLinks);
