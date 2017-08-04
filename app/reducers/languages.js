import { CHANGE_PHRASE, SWAP_LANGUAGE, CHANGE_BASE_LANGUAGE, CHANGE_QUOTE_LANGUAGE } from '../actions/languages';

const initialState = {
  baseLanguage: 'EN',
  quoteLanugage: 'RO',
  phrase: 'Hello world',
  translation: 'Salut lume',
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...state,
        phrase: action.phrase || '',
      };
    case SWAP_LANGUAGE:
      console.log('haha');
      return {
        ...state,
        baseLanguage: state.quoteLanugage,
        quoteLanugage:  state.baseLanguage,
      };
      case CHANGE_BASE_LANGUAGE:
      return {
        ...state,
        baseLanguage: action.language,
        isFetching: true,
      };
      case CHANGE_QUOTE_LANGUAGE:
      return {
        ...state,
        quoteLanugage: action.language,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default reducer;
