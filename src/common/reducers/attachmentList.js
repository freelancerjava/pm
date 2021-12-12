import { Routines } from '../../common/api'
import { LOGOUT } from "../constants";


const initial = {
    data: []
}

export default (state = initial, action) => {
    switch (action.type) {
        case Routines.admin.attachmentList.SUCCESS: {
            let simpleData = action.payload.response.data
            let parsedData = { id: action.payload.request.id, data: simpleData }
            let flag = false;
            let newData = []
            state.data.map((item) => {
                if (item.id == parsedData.id) {
                    newData.push(parsedData)
                    flag = true
                } else {
                    newData.push(item)
                }
            })
            if (newData.length == 0 || !flag) newData.push(parsedData)
            return {
                ...state,
                data: newData
            }
        }
        case Routines.admin.deleteAttachment.TRIGGER: {
            let id = action.payload.id
            let newData = []
            state.data.map((item, index) => {
                if (item.id != id) newData.push(item)
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