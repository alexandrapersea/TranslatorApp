import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import languages from '../data/languages';
import { changeBaseLanguage, changeQuoteLanguage } from '../actions/languages';

class LanguageList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseLanguage: PropTypes.string,
    quoteLanugage: PropTypes.string,
  }

  handlePress = (language) => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseLanguage(language));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteLanguage(language));
    }
    this.props.navigation.goBack(null);
  }

  render() {
    let selectedLanguage = this.props.baseLanguage;
    if (this.props.navigation.state.params.type === 'quote') {
      selectedLanguage = this.props.quoteLanugage;
    }

    return (
      <View style={{ flex: 1}}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={languages}
          renderItem={({ item }) =>
            <ListItem
            text={item}
            selected={item === selectedLanguage}
            onPress={() => this.handlePress(item)}
            />
          }
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  baseLanguage: state.languages.baseLanguage,
  quoteLanugage: state.languages.quoteLanugage,
});

export default connect(mapStateToProps)(LanguageList);
