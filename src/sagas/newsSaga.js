import * as newsApi from "../api/newsApi";
import { call, put, takeLatest } from "redux-saga/effects";
import { getNewsSuccess, getNewsFail } from "../actions/newsAction";
import { NEWS_GETTING } from "../actions/actionTypes";

export function* getNews(action) {
  try {
    const news = yield call(newsApi.get, action.data);
    yield put(getNewsSuccess(news));
  } catch (e) {
    yield put(getNewsFail(e.message));
  }
}

export function* newsSaga() {
  yield takeLatest(NEWS_GETTING, getNews);
}
