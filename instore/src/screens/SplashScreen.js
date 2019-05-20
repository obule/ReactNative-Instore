import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';

import OnboardingLogos from '../commons/OnboardingLogos';

class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 2000);
  };
  render() {
    return (
      <Box f={1} center>
        <OnboardingLogos />
      </Box>
    );
  }
}

export default SplashScreen;
