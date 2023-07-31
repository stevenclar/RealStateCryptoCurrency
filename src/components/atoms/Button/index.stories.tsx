import React from 'react';
import Button from '.';
import {boolean, select, text} from '@storybook/addon-knobs';
import {StoryObj, Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {ViewProps, View} from 'react-native';
import {ButtonProps} from 'react-native-paper';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta<typeof Button>;

export const Basic: StoryObj<typeof Button> = (
  args: React.JSX.IntrinsicAttributes &
    Pick<
      ButtonProps,
      | keyof ViewProps
      | 'elevation'
      | 'theme'
      | keyof React.RefAttributes<View>
      | 'loading'
      | 'onPress'
      | 'contentStyle'
      | 'labelStyle'
      | 'dark'
      | 'compact'
      | 'color'
      | 'buttonColor'
      | 'textColor'
      | 'rippleColor'
      | 'icon'
      | 'disabled'
      | 'onPressIn'
      | 'onPressOut'
      | 'onLongPress'
      | 'delayLongPress'
    > & {
      mode?:
        | 'contained'
        | 'text'
        | 'outlined'
        | 'elevated'
        | 'contained-tonal'
        | undefined;
      uppercase?: boolean | undefined;
    } & {},
) => <Button {...args} />;

Basic.args = {
  mode: select(
    'mode',
    ['contained', 'text', 'outlined', 'elevated', 'contained-tonal', undefined],
    'contained',
  ),
  uppercase: boolean('uppercase', true),
  loading: boolean('loading', false),
  disabled: boolean('disabled', false),
  onPress: action('onPress'),
  contentStyle: {
    width: 200,
  },
  labelStyle: {
    fontSize: 20,
  },
  buttonColor: select(
    'buttonColor',
    ['primary', 'accent', 'error', 'warning', 'info', 'success', 'white'],
    'primary',
  ),
  textColor: select(
    'textColor',
    ['primary', 'accent', 'error', 'warning', 'info', 'success', 'white'],
    'white',
  ),
  rippleColor: select(
    'rippleColor',
    ['primary', 'accent', 'error', 'warning', 'info', 'success', 'white'],
    'white',
  ),
  icon: text('icon', 'home'),
  children: text('children', 'Button'),
};
