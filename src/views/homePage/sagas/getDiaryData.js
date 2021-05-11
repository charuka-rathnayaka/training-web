import {take, put, takeEvery} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import firebase from '../../../config.js';

/**
 * Saga function to get diary cards from firebase.
 */
export default function* getDiaryCardData() {
  const ref = firebase.firestore().collection('Diaries')
      .orderBy('TimeStamp', 'desc');
  const channel = eventChannel((emit)=>ref.onSnapshot(emit));
  while (true) {
    try {
      const data = yield take(channel);
      const diaryData = data.docs.map((doc)=>{
        return doc.data();
      });
      yield put({type: 'Get Data', payload: diaryData});
    } catch (error) {
      console.error('Error Occured:', error);
    }
  }
}

/**
 * Saga watcher function to get diary cards from firebase.
 */
export function* watchgetDiaryCardData() {
  yield takeEvery('GET_SAGA_DATA', getDiaryCardData);
}
