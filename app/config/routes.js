import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Splash from '../screens/Splash';
import LanguageList from '../screens/LanguageList';

export default StackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: () => null,
    },
  },
  LanguageList: {
    screen: LanguageList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  }},
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight }
  },
);
