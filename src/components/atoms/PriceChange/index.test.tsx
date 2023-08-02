import React from 'react';
import {create} from 'react-test-renderer';
import PriceChange from '.';
import {Paragraph} from 'react-native-paper';

describe('PriceChange component', () => {
  it('should display a positive percentage change with green color', () => {
    const priceChange = create(<PriceChange lastChangePercent={1} />);
    const instance = priceChange.root;
    const paragraph = instance.findByType(Paragraph);
    expect(paragraph.props.style.color).toBe('green');
  });

  it('should display a negative percentage change with red color', () => {
    const priceChange = create(<PriceChange lastChangePercent={-1} />);
    const instance = priceChange.root;
    const paragraph = instance.findByType(Paragraph);
    expect(paragraph.props.style.color).toBe('red');
  });

  it('should display a positive percentage change with a + sign', () => {
    const priceChange = create(<PriceChange lastChangePercent={1} />);
    const instance = priceChange.root;
    const paragraph = instance.findByType(Paragraph);
    expect(paragraph.props.children).toBe('+1%');
  });

  it('should display a negative percentage change without a + sign', () => {
    const priceChange = create(<PriceChange lastChangePercent={-1} />);
    const instance = priceChange.root;
    const paragraph = instance.findByType(Paragraph);
    expect(paragraph.props.children).toBe('-1%');
  });
});
