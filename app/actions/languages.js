export const SWAP_LANGUAGE = 'SWAP_LANGUAGE';
export const CHANGE_PHRASE = 'CHANGE_PHRASE';
export const CHANGE_BASE_LANGUAGE = 'CHANGE_BASE_LANGUAGE';
export const CHANGE_QUOTE_LANGUAGE = 'CHANGE_QUOTE_LANGUAGE';
export const GET_INITIAL_TRANSLATION = 'GET_INITIAL_TRANSLATION';
export const TRANSLATION_RESULT = 'TRANSLATION_RESULT';
export const TRANSLATION_ERROR = 'TRANSLATION_ERROR';

export const swapLanguage = () => ({
  type: SWAP_LANGUAGE,
});

export const changePhrase = phrase => ({
  type: CHANGE_PHRASE,
  phrase,
});

export const changeBaseLanguage = language => ({
  type: CHANGE_BASE_LANGUAGE,
  baseLanguage: language,
});

export const changeQuoteLanguage = language => ({
  type: CHANGE_QUOTE_LANGUAGE,
  quoteLanugage: language,
});

export const getInitialTranslation = () => ({
  type: GET_INITIAL_TRANSLATION,
});
