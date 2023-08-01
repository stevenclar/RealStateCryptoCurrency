import React from 'react';
import Button from '.';
import {Button as PaperButton} from 'react-native-paper';
import {create} from 'react-test-renderer';

jest.useFakeTimers();

describe('Button component', () => {
  it('should render correctly', () => {
    expect(Button).toBeTruthy();
  });

  it('should render the button with default props', () => {
    const button = create(<Button>Click Me</Button>);
    const instance = button.root;
    const buttonElement = instance.findByType(Button);
    expect(buttonElement.props.mode).toBe('contained');
    expect(buttonElement.props.children).toBe('Click Me');
    expect(buttonElement.props.loading).toBeFalsy();
    expect(buttonElement.props.disabled).toBeFalsy();
  });

  it('should render the button with custom label and styles', () => {
    const button = create(
      <Button
        labelStyle={{color: 'red'}}
        contentStyle={{backgroundColor: 'blue'}}>
        Click Me
      </Button>,
    );
    const instance = button.root;
    const buttonElement = instance.findByType(Button);
    expect(buttonElement.props.labelStyle).toEqual({color: 'red'});
    expect(buttonElement.props.contentStyle).toEqual({backgroundColor: 'blue'});
  });

  it('should disable button and prevent onPress when loading prop is true', async () => {
    const button = create(<Button loading={true}>Click Me</Button>);
    const instance = button.root;
    const buttonElement = instance.findByType(PaperButton);
    expect(buttonElement.props.loading).toBeTruthy();
    expect(buttonElement.props.disabled).toBeTruthy();
  });

  it('should trigger onPress function when the button is clicked and loading prop is false', () => {
    const onPress = jest.fn();
    const button = create(<Button onPress={onPress}>Click Me</Button>);
    const instance = button.root;
    const buttonElement = instance.findByType(PaperButton);
    buttonElement.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
