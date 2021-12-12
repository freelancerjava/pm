import { Routines } from '../../common/api'
import { LOGOUT } from "../constants";

const initial = {
    order: [
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
            "updated": "2018-12-13 18:06:31",
            user: {
                first_name: "Test",
                last_name: "User"
            }
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
            "updated": "2018-12-13 18:06:31",
            user: {
                first_name: "Test",
                last_name: "User"
            }
        },
        {
            "id": 3,
            "loadId": 3,
            "driver": 2,
            "speed": "25.50",
            "direction": 27,
            "when": "2018-11-30 16:00:00",
            "lat": -86.397,
            "lng": 152.644,
            "created": "2018-12-13 18:06:31",
            "updated": "2018-12-13 18:06:31",
            user: {
                first_name: "Test",
                last_name: "User"
            }
        }
    ]
}

export default (state = initial, action) => {
    switch (action.type) {
        case Routines.admin.orderDetail.SUCCESS: {
            let data = action.payload.response.data[0]
            let newData = []
            let added = false
            state.order.map((item) => {
                if (item.id == data.id) {
                    newData.push(data)
                    added = true
                } else {
                    newData.push(item)
                }
            })
            if (state.order.length == 0 || !added) newData.push(data)
            return {
                ...state,
                order: newData
            }
        }
        case Routines.admin.deleteOrder.TRIGGER: {
            let id = action.payload.id
            let newData = []
            state.order.map((item, index) => {
                if (item.id != id) newData.push(item)
            })
            return {
                ...state,
                order: newData
            }
        }
        case LOGOUT: {
            return initial
        }
    }
    return state
}