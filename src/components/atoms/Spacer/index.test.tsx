// Spacer.test.js

import React from 'react';
import {render} from '@testing-library/react-native';
import Spacer from '.';

describe('Spacer component', () => {
  test('renders Spacer component without errors', () => {
    render(<Spacer size={10} />);
    expect(Spacer).toBeTruthy();
  });

  test('applies correct size to the Spacer', () => {
    const {getByTestId} = render(<Spacer size={20} />);
    const spacer = getByTestId('spacer');
    expect(spacer).toHaveStyle({width: 20, height: 20});
  });

  test('applies flex style to the Spacer when flex prop is true', () => {
    const {getByTestId} = render(<Spacer size={10} flex />);
    const spacer = getByTestId('spacer');
    expect(spacer).toHaveStyle({flex: 1});
  });

  test('applies custom styles to the Spacer', () => {
    const customStyle = {backgroundColor: 'red', borderWidth: 1};
    const {getByTestId} = render(<Spacer size={10} style={customStyle} />);
    const spacer = getByTestId('spacer');
    expect(spacer).toHaveStyle(customStyle);
  });
});
