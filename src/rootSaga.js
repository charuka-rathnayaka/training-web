import {watchgetDiaryCardData} from './views/homePage/sagas/getDiaryData.js';
import {watchAddDiaryCard} from './views/homePage/sagas/addDiaryCard.js';
import {all} from '@redux-saga/core/effects';
/**
 * Root Saga Function for watch sagas.
 */
export function* rootSaga() {
  yield all([
    watchgetDiaryCardData(),
    watchAddDiaryCard(),
  ]);
}
