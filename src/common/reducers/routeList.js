import { Routines } from '../../common/api'
import {LOGOUT} from "../constants";
import moment from 'moment'

const initial = {
    tracking: [
        {
            "id": 1,
            "load": 1,
            "driver": 2,
            "speed": "25.50",
            "direction": 27,
            "when": "2018-11-30 16:00:00",
            "lat": -33.397,
            "lng": 151.644,
            "created": "2018-12-13 18:06:31",
            "updated": "2018-12-13 18:06:31"
        },
        {
            "id": 2,
            "load": 1,
            "driver": 2,
            "speed": "25.50",
            "direction": 27,
            "when": "2018-11-30 16:00:00",
            "lat": -34.397,
            "lng": 151.944,
            "created": "2018-12-13 18:06:31",
            "updated": "2018-12-13 18:06:31"
        },
        {
            "id": 3,
            "load": 1,
            "driver": 2,
            "speed": "25.50",
            "direction": 27,
            "when": "2018-11-30 16:00:00",
            "lat": -36.397,
            "lng": 152.644,
            "created": "2018-12-13 18:06:31",
            "updated": "2018-12-13 18:06:31"
        }
    ],
    locationsEveryHour:[],
    spinner:false
}

export default (state = initial, action) => {
    switch (action.type){
        case Routines.admin.routeList.SUCCESS:{
            let data = action.payload.response.data
            data = data.map((point, i)=>{
                return {
                    ...point,
                    lat:parseFloat(point.latitude), lng:parseFloat(point.longitude)
                }
            })
            let locations = []
            if(data.length > 0){
                let nextHour = moment(data[0].when).add(1, 'hour').startOf('hour')
                data[0].time = nextHour
                //locations.push(data[0])
                let x
                for(x in data){
                    if( nextHour > moment(data[x].when).add(1, 'hour').startOf('hour')) {
                        nextHour = moment(data[x].when).add(1, 'hour').startOf('hour')
                        data[x].time = nextHour
                        locations.push(data[x])
                    }
                }
            }
            locations.map((item, index)=>{
                // console.log(moment(item.time).format('HH:mm  DD-MM-YYYY'))
            })
            data.map((item, index)=>{
                // console.log(moment(item.when).format('HH:mm  DD-MM-YYYY'))
            })
            // data.map((item, index)=>{
            //     console.log(moment(item.when).format('HH:mm  DD-MM-YYYY'))
            // })
            return {
                ...state,
                tracking:data,
                locationsEveryHour: locations,
                spinner:false
            }
        }

        case Routines.admin.routeList.REQUEST:
            return {
                ...state,
                spinner:true
            }
        case Routines.admin.routeList.FULFILL:
            return {
                ...state,
                spinner:false
            }
        case LOGOUT:
            return initial
    }
    return state
}