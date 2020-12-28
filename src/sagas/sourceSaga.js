import * as sourceApi from "../api/sourceApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getSourcesSuccess, getSourcesFail } from "../actions/sourceAction";
import { SOURCE_GETTING } from "../actions/actionTypes";

export function* getSources() {
  try {
    const sources = yield call(sourceApi.get);
    yield put(getSourcesSuccess(sources));
  } catch (e) {
    yield put(getSourcesFail(e.message));
  }
}

export function* sourceSaga() {
  yield takeLatest(SOURCE_GETTING, getSources);
}
