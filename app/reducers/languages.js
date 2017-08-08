import { CHANGE_PHRASE, SWAP_LANGUAGE, CHANGE_BASE_LANGUAGE, CHANGE_QUOTE_LANGUAGE, GET_INITIAL_TRANSLATION, TRANSLATION_RESULT, TRANSLATION_ERROR } from '../actions/languages';

const initialState = {
  baseLanguage: 'en',
  quoteLanugage: 'es',
  phrase: 'Hello world!',
  translation: '',
  isFetching: false,
};

const loopLanguages = (languages) => {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...state,
        phrase: action.phrase || '',
        isFetching: true,
      };
    case SWAP_LANGUAGE:
      return {
        ...state,
        baseLanguage: state.quoteLanugage,
        quoteLanugage:  state.baseLanguage,
        isFetching: true,
      };
      case CHANGE_BASE_LANGUAGE:
      return {
        ...state,
        baseLanguage: action.baseLanguage,
        isFetching: true,
      };
      case CHANGE_QUOTE_LANGUAGE:
      return {
        ...state,
        quoteLanugage: action.quoteLanugage,
        isFetching: true,
      };
      case GET_INITIAL_TRANSLATION:
        return {
          ...state,
          isFetching: true,
        };
      case TRANSLATION_ERROR:
        return {
          ...state,
          error: action.error,
        };
      case TRANSLATION_RESULT:
        return {
          ...state,
          isFetching: false,
          translation: action.translation
        };
    default:
      return state;
  }
};

export default reducer;
