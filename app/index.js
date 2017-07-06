import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Splash from './screens/Splash';
import LanguageList from './screens/LanguageList';

EStyleSheet.build({
  $primaryColor: '#87CEFA',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightgray: '#f0f0f0',
  $darkText: '#343434',
});

export default () => <LanguageList />;
