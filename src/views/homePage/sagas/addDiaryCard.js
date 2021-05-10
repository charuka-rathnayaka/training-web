/* eslint-disable*/
import {takeEvery} from 'redux-saga/effects';

import firebase from '../../../config.js';
import 'firebase/firestore';
export default function* addDiaryCard(action) {
    
    const ref=firebase.firestore().collection('Diaries');
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    //console.log(timestamp());
    try{
        ref.add({
            Title: action.payload.Title,
            Description: action.payload.Description,
            Author: action.payload.Author,
            TimeStamp: firebase.firestore.FieldValue.serverTimestamp()
          })
        //yield put({type:"Card Submitted"});
        }
        catch(error){
            console.error('Error Occured:', error);
        }
    
}

export function* watchAddDiaryCard() {
    //console.log("In watch");
    yield takeEvery('ADD_SAGA_CARD', (action)=>addDiaryCard(action));
  }
  