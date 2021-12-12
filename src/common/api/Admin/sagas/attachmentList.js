import { call, put, takeEvery } from 'redux-saga/effects'

import Routines from '../routines'

function * trigger (api, action) {
    const { request } = action.payload
    //  console.warn(JSON.stringify(action.payload));
    try {
        yield put(Routines.attachmentList.request())

        const response = yield call(api.admin.attachmentList, request)
        // console.log(JSON.stringify(response))
        yield put(
            Routines.attachmentList.success({
                request,
                response
            })
        )
    } catch (e) {
        yield put(Routines.attachmentList.failure(e))
    } finally {
        yield put(Routines.attachmentList.fulfill())
    }
}

export default function * (api) {
    yield takeEvery(Routines.attachmentList.TRIGGER, trigger, api)
}