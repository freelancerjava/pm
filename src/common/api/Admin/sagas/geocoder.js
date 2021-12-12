import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
  //  console.warn(JSON.stringify(action.payload));
    try {
        yield put(Routines.geocoder.request())

        const response = yield call(api.admin.geocoder, request)
        // console.log(JSON.stringify(response))
        // console.log(JSON.stringify(request))
        yield put(
            Routines.geocoder.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.geocoder.failure(e))
    } finally {
        yield put(Routines.geocoder.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.geocoder.TRIGGER, trigger, api)
}
