const API_URL = 'https://translate.yandex.net/api/v1.5/tr.json/';
const API_KEY = 'trnsl.1.1.20170805T111125Z.9829117e426f3132.72ec3ca949103236bdce21d3e7e2a704842b06ed';

const TRANSLATION_URL = `${API_URL}translate?key=${API_KEY}`

export const fetchTranslation = (baseLanguage, quoteLanugage, text) => fetch(`${TRANSLATION_URL}&text=${text}&lang=${baseLanguage}-${quoteLanugage}`);
