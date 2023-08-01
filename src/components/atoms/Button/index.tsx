import React from 'react';
import {ButtonProps, Button as PaperButton} from 'react-native-paper';
import {styles} from './styles';

const Button = ({
  loading,
  disabled,
  onPress,
  contentStyle,
  labelStyle,
  ...rest
}: ButtonProps) => {
  return (
    <PaperButton
      onPress={onPress}
      loading={loading}
      disabled={loading || disabled}
      contentStyle={[contentStyle]}
      labelStyle={[styles.label, labelStyle]}
      {...rest}
    />
  );
};

Button.defaultProps = {
  mode: 'contained',
  onPress: () => {},
};

export default Button;
