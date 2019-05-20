import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';
import { images } from '../constants/Images';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../constants/theme';

const bgColor = type => {
  switch (type) {
    case 'google':
      return 'googleBlue';

    case 'facebook':
      return 'facebookBlue';

    default:
      return 'white';
  }
};

const LoginButtons = ({ children, type, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Box
      dir="row"
      align="center"
      shadow={1}
      bg={bgColor(type)}
      w="80%"
      self="center"
      p="2xs"
      radius="sm"
      mb="sm"
    >
      <Box mr="sm">
        <Box
          bg="white"
          h={32}
          w={32}
          radius="sm"
          center
          style={{ position: 'relative' }}
        >
          {type === 'google' && <Image source={images.googleColorIcon} />}
          {type === 'facebook' && (
            <FontAwesome
              name="facebook"
              size={30}
              color={theme.color.facebookBlue}
              style={{ position: 'absolute', right: 5, bottom: -3 }}
            />
          )}
        </Box>
      </Box>
      <Box>
        <Text size="md" color="white">
          {children}
        </Text>
      </Box>
    </Box>
  </TouchableOpacity>
);

export default LoginButtons;
