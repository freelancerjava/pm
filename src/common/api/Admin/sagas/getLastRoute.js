import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //  console.warn(JSON.stringify(action.payload));
    try {
        yield put(Routines.getLastRoute.request())

        const response = yield call(api.admin.getLastRoute, request)
        // console.log(JSON.stringify(response))
        yield put(
            Routines.getLastRoute.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.getLastRoute.failure(e))
    } finally {
        yield put(Routines.getLastRoute.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.getLastRoute.TRIGGER, trigger, api)
}
