import React, { Component } from "react";
import { Box, Text } from "react-native-design-utility";
import OnboardingLogos from "../commons/OnboardingLogos";
import { TouchableOpacity, Alert, Animated } from "react-native";
import LoginButtons from "../commons/LoginButtons";
import { FacebookApi } from "../api/Facebook";
import { GoogleApi } from "../api/GoogleApi";

class LoginScreen extends Component {
  state = {
    opacity: new Animated.Value(0),
    position: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.parallel([this.positionAnim(), this.opacityAnim()]).start();
    this.opacityAnim();
    this.positionAnim();
  }

  opacityAnim = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 200,
      delay: 100,
    }).start();
  };

  positionAnim = () => {
    Animated.timing(this.state.position, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  onGooglePress = async () => {
    try {
      const token = await GoogleApi.loginAsync();
      console.log("token", token);
    } catch (error) {
      console.log("error", error);
    }
  };
  onFacebookPress = async () => {
    try {
      const token = await FacebookApi.loginAsync();
      console.log("token", token);
    } catch (error) {
      console.log("error", error);
    }
  };
  render() {
    const { opacity } = this.state;
    const logoTranslate = this.state.position.interpolate({
      inputRange: [0, 1],
      outputRange: [150, 0],
    });
    return (
      <Box f={1} bg="white" center>
        <Animated.View
          style={{
            flex: 1,
            transform: [
              {
                translateY: logoTranslate,
              },
            ],
          }}
        >
          <Box f={1} center>
            <OnboardingLogos />
          </Box>
        </Animated.View>

        <Animated.View style={{ flex: 0.9, width: "100%", opacity }}>
          <LoginButtons onPress={this.onGooglePress} type="google">
            Continue with Google
          </LoginButtons>
          <LoginButtons onPress={this.onFacebookPress} type="facebook">
            Continue with Facebook
          </LoginButtons>
        </Animated.View>
      </Box>
    );
  }
}

export default LoginScreen;
