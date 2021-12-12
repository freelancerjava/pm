import orderDetail from "./orderDetail";
import routeList from "./routeList";
import geocoder from "./geocoder";
import getLastRoute from "./getLastRoute";
import hourlyList from "./hourlyList";
import attachmentList from "./attachmentList";

export default function sagas (api) {
    return [
        orderDetail(api),
        routeList(api),
        geocoder(api),
        getLastRoute(api),
        hourlyList(api),
        attachmentList(api),
    ]
}
