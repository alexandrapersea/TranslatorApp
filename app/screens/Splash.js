import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';

import { swapLanguage, changePhrase } from '../actions/languages';

class Splash extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
    dispatch: PropTypes.func,
    baseLanguage: PropTypes.string,
    quoteLanugage: PropTypes.string,
    phrase: PropTypes.string,
    translation: PropTypes.string,
  }

  handleTextChange = (text) => {
    this.props.dispatch(changePhrase(text));
    //this.props.alertWithType('error', 'error', 'Smth went wrong');
  }

  handlePressBaseLanguage = () => {
    this.props.navigation.navigate('LanguageList', { title: 'Base Language',
    type: 'base' });
  }

  handlePressQuoteLanguage = () => {
    this.props.navigation.navigate('LanguageList', { title: 'Quote Language',
    type: 'quote' });
  }

  handleSwapLanugage = () => {
    this.props.dispatch(swapLanguage());
  }

  render() {
    let translation = '...';
    if (!this.props.isFetching) {
      translation = this.props.translation;
    }

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header
          onPress={() => console.log('press')}
        />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseLanguage}
            onPress={this.handlePressBaseLanguage}
            defaultValue={this.props.phrase}
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={this.props.quoteLanugage}
            onPress={this.handlePressQuoteLanguage}
            editable={false}
            value={translation}
          />
          <ClearButton
            text="Reverse"
            onPress={this.handleSwapLanugage}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const baseLanguage = state.languages.baseLanguage;
  const quoteLanugage = state.languages.quoteLanugage;

  return {
    baseLanguage,
    quoteLanugage,
    phrase: state.languages.phrase,
    translation: state.languages.translation,
    isFetching: state.languages.isFetching,
  }
}

export default connect(mapStateToProps)(Splash);
