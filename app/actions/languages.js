export const SWAP_LANGUAGE = 'SWAP_LANGUAGE';
export const CHANGE_PHRASE = 'CHANGE_PHRASE';
export const CHANGE_BASE_LANGUAGE = 'CHANGE_BASE_LANGUAGE';
export const CHANGE_QUOTE_LANGUAGE = 'CHANGE_QUOTE_LANGUAGE';

export const swapLanguage = () => ({
  type: SWAP_LANGUAGE,
});

export const changePhrase = phrase => ({
  type: CHANGE_PHRASE,
  phrase,
});

export const changeBaseLanguage = language => ({
  type: CHANGE_BASE_LANGUAGE,
  language,
});

export const changeQuoteLanguage = language => ({
  type: CHANGE_QUOTE_LANGUAGE,
  language,
})
