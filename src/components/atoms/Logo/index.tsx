import React from 'react';
import {useTheme} from 'react-native-paper';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {StyleProp} from 'react-native';
import {styles} from './styles';

const Logo = ({style, ...rest}: LogoProps) => {
  const theme = useTheme();
  const logoSource = theme.dark
    ? require('../../../assets/images/logo-dark.png')
    : require('../../../assets/images/logo.png');

  return (
    <FastImage
      style={[styles.logo, style]}
      resizeMode="contain"
      source={logoSource}
      {...rest}
    />
  );
};

export type LogoProps = FastImageProps & {
  style?: StyleProp<any>;
};

export default Logo;
