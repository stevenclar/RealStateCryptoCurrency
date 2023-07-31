import React from 'react';
import {StatusBar} from 'react-native';
import {styles} from './styles';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

interface SafeAreaTemplateProps {
  center?: boolean;
  statusBarColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  style?: any;
}

const SafeAreaTemplate = ({
  center,
  statusBarColor,
  barStyle,
  style,
  ...restProps
}: SafeAreaTemplateProps) => {
  const {
    colors: {background},
    dark,
  } = useTheme();

  const defaultBarStyle = dark ? 'light-content' : 'dark-content';

  return (
    <>
      <StatusBar
        barStyle={barStyle || defaultBarStyle}
        backgroundColor={statusBarColor || background}
        animated={true}
      />
      <SafeAreaView
        style={[styles.body, center && styles.center, style]}
        {...restProps}
      />
    </>
  );
};

SafeAreaTemplate.defaultProps = {
  center: false,
};

export default SafeAreaTemplate;
