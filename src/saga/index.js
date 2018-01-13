import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants';

function* fetchData(action) {
    try {
        const data = yield call(Api, FETCHING_DATA, action.data, url);
        yield put({ type: FETCHING_DATA_SUCCESS, data })
    } catch (err) {
        yield put({ type: FETCHING_DATA_FAILURE, err })
    }
}

function* watchFetchData() {
    yield takeLatest(FETCHING_DATA, fetchData)
}

export default function* rootSaga() {
    yield takeLatest(FETCHING_DATA, fetchData)
}