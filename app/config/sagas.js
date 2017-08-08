import { takeEvery, select, call, put } from 'redux-saga/effects';

import { SWAP_LANGUAGE, CHANGE_BASE_LANGUAGE, CHANGE_QUOTE_LANGUAGE, GET_INITIAL_TRANSLATION, TRANSLATION_RESULT, TRANSLATION_ERROR, CHANGE_PHRASE } from '../actions/languages';
import { fetchTranslation } from './yandexApi';

function* getTranslation(action) {
  try {
    let baseLanguage = yield select(state => state.languages.baseLanguage);
    let quoteLanugage = yield select(state => state.languages.quoteLanugage);
    let phrase = yield select(state => state.languages.phrase);

    const response = yield call(fetchTranslation, baseLanguage, quoteLanugage, phrase);
    const result = yield response.json();
    if (result.code != 200) {
      yield put({ type: TRANSLATION_ERROR, error: result.message });
    } else {
      yield put({ type: TRANSLATION_RESULT, translation: result.text[0] });
    }
  } catch (error) {
    yield put({ type: TRANSLATION_ERROR, error: error.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_TRANSLATION, getTranslation);
  yield takeEvery(CHANGE_BASE_LANGUAGE, getTranslation);
  yield takeEvery(CHANGE_QUOTE_LANGUAGE, getTranslation);
  yield takeEvery(SWAP_LANGUAGE, getTranslation);
  yield takeEvery(CHANGE_PHRASE, getTranslation);
}
