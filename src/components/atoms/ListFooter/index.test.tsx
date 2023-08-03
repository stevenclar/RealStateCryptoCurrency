import React from 'react';
import {render} from '@testing-library/react-native';
import ListFooter from '../ListFooter';

describe('ListFooter Component', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<ListFooter />);
    const listFooter = getByTestId('list-footer');
    expect(listFooter).toBeTruthy();
  });

  it('should display "No more crypto currency at the moment" text when isListEnding is true', () => {
    const {getByText} = render(<ListFooter isListEnding={true} />);
    const noMoreText = getByText('No more crypto currency at the moment');
    expect(noMoreText).toBeTruthy();
  });

  it('should not display the text when isListEnding is false', () => {
    const {queryByText} = render(<ListFooter isListEnding={false} />);
    const noMoreText = queryByText('No more crypto currency at the moment');
    expect(noMoreText).toBeNull();
  });

  it('should have the correct default value for isListEnding prop', () => {
    const {queryByText} = render(<ListFooter />);
    const noMoreText = queryByText('No more crypto currency at the moment');
    expect(noMoreText).toBeNull();
  });
});
