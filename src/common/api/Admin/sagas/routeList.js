import { call, put, takeEvery } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    // console.log(action.payload);
    try {
        yield put(Routines.routeList.request())
        const response = yield call(api.admin.routeList, request)
       // console.log(response)
        yield put(
            Routines.routeList.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.routeList.failure(e))
    } finally {
        yield put(Routines.routeList.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.routeList.TRIGGER, trigger, api)
}
