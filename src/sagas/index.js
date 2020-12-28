import { all } from "redux-saga/effects";
import { newsSaga } from "./newsSaga";
import { sourceSaga } from "./sourceSaga";

export default function* rootSaga() {
  yield all([newsSaga(), sourceSaga()]);
}
