import React from 'react';
import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility';
import Navigation from './src/screens';
import { images } from './src/constants/Images';
import { cacheImages } from './src/util/cacheImages';
import { ActivityIndicator } from 'react-native';
import { theme } from './src/constants/theme';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imageAssets = cacheImages(Object.values(images));

    await Promise.all([...imageAssets]);
    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <Box f={1} center bg="white">
          <ActivityIndicator size="large" />
        </Box>
      );
    }
    return (
      <UtilityThemeProvider theme={theme}>
        <Navigation />
      </UtilityThemeProvider>
    );
  }
}
