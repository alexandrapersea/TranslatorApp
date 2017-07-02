import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Splash from './screens/Splash';

EStyleSheet.build({
  $primaryColor: '#87CEFA',
  $border: '#bfb7e6',
  $inputText: '#797979',
  $lightgray: '#f0f0f0',
});

export default () => <Splash />;
