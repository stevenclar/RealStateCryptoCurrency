import React from 'react';
import TextInput from '.';
import {Meta} from '@storybook/react';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>;

export const Basic = () => <TextInput />;
