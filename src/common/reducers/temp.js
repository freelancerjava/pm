import { Routines } from '../../common/api'

const initial = {
    spinner:false,
    loginError:''
}

export default (state = initial, action) => {
    switch (action.type){
        case Routines.admin.orderDetail.SUCCESS:{
            return {
                ...state,
                spinner:false,
                loginError:''
            }
        }

        case Routines.admin.orderDetail.REQUEST:
            return {
                ...state,
                spinner:true
            }
        case Routines.admin.orderDetail.FULFILL:
            return {
                ...state,
                spinner:false
            }
        case Routines.admin.orderDetail.FAILURE:{
            return {
                ...state,
                spinner:false,
                loginError: action.payload&&action.payload.detail
            }
        }
        case Routines.admin.attachmentList.SUCCESS:{
            return {
                ...state,
                spinner:false,
            }
        }

        case Routines.admin.attachmentList.REQUEST:
            return {
                ...state,
                // spinner:true
            }
        case Routines.admin.attachmentList.FULFILL:
            return {
                ...state,
                spinner:false
            }
        case Routines.admin.attachmentList.FAILURE:{
            return {
                ...state,
                spinner:false,
            }
        }
    }
    return state
}