import React from 'react';
import Logo from '.';
import {FastImageProps} from 'react-native-fast-image';
import {Meta, StoryObj} from '@storybook/react';

export default {
  title: 'Atoms/Logo',
  component: Logo,
} as Meta<typeof Logo>;

export const Basic: StoryObj<typeof Logo> = (
  args: FastImageProps & {
    style?:
      | import('react-native').StyleProp<import('react-native').ViewStyle>
      | undefined;
  } & {},
) => <Logo {...args} />;

Basic.args = {
  style: {
    width: 200,
    height: 200,
  },
};
