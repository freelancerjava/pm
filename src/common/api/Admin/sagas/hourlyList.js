import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //  console.warn(JSON.stringify(action.payload));
    try {
        yield put(Routines.hourlyList.request())

        const response = yield call(api.admin.hourlyList, request)
        // console.log(JSON.stringify(response))
        yield put(
            Routines.hourlyList.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.hourlyList.failure(e))
    } finally {
        yield put(Routines.hourlyList.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.hourlyList.TRIGGER, trigger, api)
}