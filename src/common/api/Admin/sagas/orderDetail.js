import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function* trigger(api, action) {
    const { request } = action.payload
    // console.log(action.payload);
    try {
        yield put(Routines.orderDetail.request())
        const response = yield call(api.admin.orderDetail, request)
        // console.log("Order details", response)
        if (response.data.length != 0) {
            yield put(
                Routines.orderDetail.success({
                    request,
                    response
                })
            )
        } else {
            yield put(
                Routines.orderDetail.failure({response})
            )
        }
    } catch (e) {
        yield put(Routines.orderDetail.failure(e))
    } finally {
        yield put(Routines.orderDetail.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(Routines.orderDetail.TRIGGER, trigger, api)
}
