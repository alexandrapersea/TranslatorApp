import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.image = new Animated.ValueXY({x: styles.$largeImageSize, y: styles.$largeImageSize});
  }
  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';

    if (Platform.OS == 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.spring(this.image, {
        toValue: {
          x: styles.$smallImageSize, y: styles.$smallImageSize,
        },
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.spring(this.image, {
        toValue: {
          x: styles.$largeImageSize,
          y: styles.$largeImageSize,
        },
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  render() {
    const containerImageStyle = [
      styles.containerImage,
      {
        width: this.containerImageWidth,
        height: this.containerImageWidth,
      },
    ];

    const imageStyle = [
      styles.image,
      {
        width: this.image.x,
        height: this.image.y,
      },
    ];

    return (
      <View style={styles.container}>
        <Animated.Image resizemode="contain" style={containerImageStyle} source={require('./images/background.png')}>
          <Animated.Image resizemode="contain" style={imageStyle} source={require('./images/logo.png')}/>
        </Animated.Image>
        <Text style={styles.text}>Translator</Text>
      </View>
    );
  }
}

export default Logo;
