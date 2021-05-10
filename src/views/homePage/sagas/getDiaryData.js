/* eslint-disable*/
import { take, put,takeEvery} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from '../../../config.js';

export default function* getDiaryCardData() {
    //console.log("In sagas get data");
    const ref=firebase.firestore().collection('Diaries').orderBy("TimeStamp","desc");
    const channel = eventChannel((emit)=>ref.onSnapshot(emit))
    while (true){
        try{
            const data = yield take(channel);
            const diaryData = data.docs.map(doc=>{
                return doc.data()
            })
            yield put({type:"Get Data",payload:diaryData})
        }
        catch(error){
            console.error('Error Occured:', error);
        }
    } 
}

export function* watchgetDiaryCardData() {
    //console.log("In watch");
    yield takeEvery('GET_SAGA_DATA', getDiaryCardData);
  }
  