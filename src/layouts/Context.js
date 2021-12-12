import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Landing from "./Landing";
import Login from "./Login";
import Contact from './Landing/Contact';
import Download from './Landing/Download';
import Test from './test';

class Context extends Component {
    routes = [
        {
            component: Test,
            path:'/test'
        },
        {
            component: Dashboard,
            path:'/dashboard'
        },
        {
            component: Login,
            path:'/login'
        },
        {
            component: Contact,
            path:'/contact'
        },
        {
            component: Download,
            path: '/download'
        },
        {
            component: Login,
            path:'/'
        }
    ]
    render() {
        const {...rest} = this.props
        return (
            <Switch>
                {
                    this.routes.map((route, index)=>{
                        return(
                            <Route path={route.path} exact component={route.component} key={index}/>
                        )
                    })
                }
            </Switch>
        )
    }
}

export default Context