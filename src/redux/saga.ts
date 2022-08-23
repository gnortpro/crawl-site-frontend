import {all, AllEffect, fork, ForkEffect} from 'redux-saga/effects';


export default function* rootSaga(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
  // yield all([
  //   fork(detailProfileSage),
  // ]);
}
