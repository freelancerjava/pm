import {combineReducers} from "redux";
import order from "./order";
import {reducer as formReducer} from "redux-form";
import routeList from "./routeList";
import geocoder from "./geocoder";
import temp from "./temp";
import lastRoute from "./lastRoute";
import hourlyList from "./hourlyList";
import attachmentList from "./attachmentList";

export default combineReducers({
    
    order,
    routeList,
    lastRoute,
    geocoder,
    hourlyList,
    attachmentList,
    temp,
    form: formReducer,
});