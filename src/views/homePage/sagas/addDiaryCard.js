import {takeEvery} from 'redux-saga/effects';
import firebase from '../../../config.js';
import 'firebase/firestore';

/**
 * Saga for Adding a diary card.
 * @param {object} action object carrying diary data.
 */
export default function* addDiaryCard(action) {
  const ref=firebase.firestore().collection('Diaries');
  try {
    ref.add({
      Title: action.payload.Title,
      Description: action.payload.Description,
      Author: action.payload.Author,
      TimeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error Occured:', error);
  }
}
/**
 * Watcher for adding diary card saga function.
 */
export function* watchAddDiaryCard() {
  yield takeEvery('ADD_SAGA_CARD', (action)=>addDiaryCard(action));
}

