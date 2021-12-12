import { Routines } from '../../common/api'
import { LOGOUT } from "../constants";

const initial = {
    data: [
        {
            "id": 1,
            "loadId": 1,
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
            "loadId": 2,
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
            "loadId": 3,
            "driver": 2,
            "speed": "25.50",
            "direction": 27,
            "when": "2018-11-30 16:00:00",
            "lat": 40.397,
            "lng": 62.644,
            "created": "2018-12-13 18:06:31",
            "updated": "2018-12-13 18:06:31"
        }
    ]
}

export default (state = initial, action) => {
    switch (action.type) {
        case Routines.admin.getLastRoute.SUCCESS: {
            let simpleData = action.payload.response.data[0]
            let parsedData = {
                ...simpleData,
                lat: parseFloat(simpleData.lat),
                lng: parseFloat(simpleData.lng)
            }
            // console.log("simple", simpleData)
            let newData = []
            let added = false
            // if (new Date().getTime() % 2 == 0) parsedData.createdAt = new Date().toISOString()
            state.data.map((item) => {
                if (item.loadId == parsedData.loadId) {
                    // parsedData = {
                    //     ...parsedData,
                    //     lat: item.lat+0.001,
                    //     lng: item.lng+0.001
                    // }
                    newData.push(parsedData)
                    added = true
                    // console.log('state')
                } else {
                    // console.log(action.payload.request.id, item.loadId)
                    // if (item.loadId == action.payload.id) added = true
                    newData.push(item)
                }
            })
            if (state.data.length == 0 || !added) newData.push(parsedData)
            return {
                ...state,
                data: newData
            }
        }
        case Routines.admin.deleteLastRoute.TRIGGER: {
            // console.log('action.payload.id',action.payload.id)      
            // console.log('state',state)
            let id = action.payload.id
            let newData = []
            state.data.map((item, index) => {
                if (item.loadId != id) newData.push(item)
            })
            return {
                ...state,
                data: newData
            }
        }
        case LOGOUT: {
            return initial
        }
    }
    return state
}