import React from 'react';
import {create} from 'react-test-renderer';
import PrinceChange from '.';
import {Paragraph} from 'react-native-paper';

describe('PrinceChange component', () => {
  it('should display a positive percentage change with green color', () => {
    const princeChange = create(<PrinceChange lastChangePercent={1} />);
    const instance = princeChange.root;
    const paragraph = instance.findByType(Paragraph);
    expect(paragraph.props.style.color).toBe('green');
  });

  it('should display a negative percentage change with red color', () => {
    const princeChange = create(<PrinceChange lastChangePercent={-1} />);
    const instance = princeChange.root;
    const paragraph = instance.findByType(Paragraph);
    expect(paragraph.props.style.color).toBe('red');
  });

  it('should display a positive percentage change with a + sign', () => {
    const princeChange = create(<PrinceChange lastChangePercent={1} />);
    const instance = princeChange.root;
    const paragraph = instance.findByType(Paragraph);
    expect(paragraph.props.children).toBe('+1%');
  });

  it('should display a negative percentage change without a + sign', () => {
    const princeChange = create(<PrinceChange lastChangePercent={-1} />);
    const instance = princeChange.root;
    const paragraph = instance.findByType(Paragraph);
    expect(paragraph.props.children).toBe('-1%');
  });
});
