import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List';
import languages from '../data/languages';

class LanguageList extends Component {
  handlePress = () => {
    console.log('press');
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
