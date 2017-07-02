import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_LANGUAGE = 'ENG';
const TEMP_QUOTE_LANGUAGE = 'RO';

class Splash extends Component {
  handleTextChange = (text) => {
    console.log('change text', text);
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_LANGUAGE}
          onPress={() => { console.log('press')}}
          defaultValue={'Hello World'}
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_LANGUAGE}
          onPress={() => { console.log('press')}}
          editable={false}
          value={'Salut lume'}
        />
      </Container>
    );
  }
}

export default Splash;
