import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'



function* trigger(api, action){
    const { id } = action.payload
    yield put(Routines.deleteGeocoder.success({
        id
    }))
}

export default function* (api){
    yield takeEvery(Routines.deleteGeocoder.TRIGGER, trigger, api)
}