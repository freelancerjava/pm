import { Routines } from '../../common/api'
import { LOGOUT } from "../constants";

const initial = {
    geodata: []
}

export default (state = initial, action) => {
    // console.log("action.payload.response", action)
    switch (action.type) {
        case Routines.admin.geocoder.SUCCESS: {
            let zip_code = 'N/A'
            let address = ''

            if (action.payload.response.data.results[0] && action.payload.response.data.results[0].formatted_address)
                address = action.payload.response.data.results[0].formatted_address

            let data = action.payload.response.data.results &&
                action.payload.response.data.results[0] && action.payload.response.data.results[0].address_components

            data && data.map((address, index) => {
                address.types && address.types.map((type) => {
                    if (type === "postal_code") {
                        zip_code = address.long_name
                    }
                })
            })

            let temp = {
                id: action.payload.request.id,
                zip_code,
                address
            }

            let newData = []
            let added = false
            state.geodata.map((item) => {
                if (item.id == temp.id) {
                    newData.push(temp)
                    added = true
                } else {
                    newData.push(item)
                }
            })
            if (state.geodata.length == 0 || !added) newData.push(temp)
            return {
                ...state,
                geodata: newData
            }
        }
        case Routines.admin.deleteGeocoder.TRIGGER: {
            let id = action.payload.id
            let newData = []
            state.geodata.map((item, index) => {
                if (item.id != id) newData.push(item)
            })
            return {
                ...state,
                geodata: newData
            }
        }
        case LOGOUT: {
            return initial
        }
    }
    return state
}