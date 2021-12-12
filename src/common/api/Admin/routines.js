import { createRoutine } from 'redux-saga-routines'


export default {

    orderDetail: createRoutine('ORDER_DETAIL'),
    routeList: createRoutine('ROUTE_LIST'),
    geocoder: createRoutine('GEOCODER'),
    getLastRoute: createRoutine('GET_LAST_ROUTE'),
    hourlyList: createRoutine('GET_HOURLY_LIST'),
    attachmentList: createRoutine('GET_ATTACHMENT_LIST'),
    deleteOrder: createRoutine('DELETE_ORDER'),
    deleteLastRoute: createRoutine('DELETE_LAST_ROUTE'),
    deleteAttachment: createRoutine('DELETE_ATTACHMENT'),
    deleteHourlyList: createRoutine('DELETE_HOURLY_LIST'),
    deleteGeocoder: createRoutine('DELETE_GEOCODER')

}
