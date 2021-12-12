import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'
import createStore, {history} from "./common/createStore";
import {Provider} from 'react-redux';
import Context from "./layouts/Context";
import './common/ExceptionHandler'

const {store, persistor} = createStore();
class App extends Component {
    render() {
        return <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HashRouter history={history} basename="/app/">
                    <Context/>
                </HashRouter>
            </PersistGate>
        </Provider>
    }
}

ReactDOM.render(<App/>,
    document.getElementById("root")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


if(module.hot){
    module.hot.accept()
  }