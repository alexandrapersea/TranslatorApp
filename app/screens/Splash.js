import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { Header } from '../components/Header';

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
        <Header
          onPress={() => console.log('press')}
        />
        <KeyboardAvoidingView behavior="padding">
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
          <ClearButton
            text="Reverse"
            onPress={() => console.log('press')}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Splash;
