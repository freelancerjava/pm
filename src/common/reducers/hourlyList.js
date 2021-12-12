import { LOGOUT } from "../constants";
import { Routines } from '../../common/api'

const initial = {
    hourlyData: []
}

export default (state = initial, action) => {
    switch (action.type) {
        case Routines.admin.hourlyList.SUCCESS: {
            let simpleData = action.payload.response.data
            let parsedData = { id: action.payload.request.id, data: simpleData }

            let newData = []
            let added = false
            state.hourlyData.map((item) => {
                if (item.id == parsedData.id) {
                    newData.push(parsedData)
                    added = true
                } else {
                    newData.push(item)
                }
            })
            if (state.hourlyData.length == 0 || !added) newData.push(parsedData)
            return {
                ...state,
                hourlyData: newData
            }
        }
        case Routines.admin.deleteHourlyList.TRIGGER: {
            let id = action.payload.id
            let newData = []
            state.hourlyData.map((item, index) => {
                if (item.id != id) newData.push(item)
            })
            return {
                ...state,
                hourlyData: newData
            }
        }
        case LOGOUT: {
            return initial
        }
    }
    return state
}

