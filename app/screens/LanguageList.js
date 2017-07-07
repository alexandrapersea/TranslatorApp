import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import languages from '../data/languages';

class LanguageList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePress = () => {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={languages}
          renderItem={({ item }) =>
            <ListItem
            text={item}
            selected={item === 'EN'}
            onPress={this.handlePress}
            />
          }
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default LanguageList;
