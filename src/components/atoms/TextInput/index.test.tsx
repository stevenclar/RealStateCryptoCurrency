import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TextInput from '.';

jest.useFakeTimers();

describe('TextInput', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<TextInput />);
    const textInput = getByTestId('text-input');
    expect(textInput).toBeTruthy();
  });

  it('should show the placeholder text', () => {
    const placeholderText = 'Enter your text here';
    const {getByPlaceholderText} = render(
      <TextInput placeholder={placeholderText} />,
    );
    const textInput = getByPlaceholderText(placeholderText);
    expect(textInput).toBeTruthy();
  });

  it('should toggle secureTextEntry when eye icon is pressed', () => {
    const {getByTestId} = render(<TextInput secureTextEntry right="eye-off" />);
    const textInput = getByTestId('text-input');
    const eyeIcon = getByTestId('eye-icon');

    expect(textInput.props.secureTextEntry).toBe(true);

    fireEvent.press(eyeIcon);

    expect(textInput.props.secureTextEntry).toBe(false);

    fireEvent.press(eyeIcon);

    expect(textInput.props.secureTextEntry).toBe(true);
  });

  it('should call rightAction when right icon is pressed', () => {
    const mockRightAction = jest.fn();
    const {getByTestId} = render(
      <TextInput right="windsock" rightAction={mockRightAction} />,
    );
    const rightIcon = getByTestId('custom-icon');

    fireEvent.press(rightIcon);

    expect(mockRightAction).toHaveBeenCalled();
  });
});
