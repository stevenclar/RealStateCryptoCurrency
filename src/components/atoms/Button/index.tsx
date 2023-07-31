import React from 'react';
import {ButtonProps, Button as PaperButton} from 'react-native-paper';
import {styles} from './styles';

const Button = ({
  loading,
  onPress,
  contentStyle,
  labelStyle,
  ...rest
}: ButtonProps) => {
  return (
    <PaperButton
      onPress={loading ? () => {} : onPress}
      loading={loading}
      contentStyle={[contentStyle]}
      labelStyle={[styles.label, labelStyle]}
      {...rest}
    />
  );
};

Button.defaultProps = {
  uppercase: false,
  mode: 'contained',
};

export default Button;
