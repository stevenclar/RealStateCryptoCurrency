import React, {useMemo} from 'react';
import {Paragraph} from 'react-native-paper';

interface PriceChangeProps {
  lastChangePercent: number;
  testID?: string;
  style?: any;
}

const PriceChange = ({lastChangePercent, style, testID}: PriceChangeProps) => {
  const hasGoneUp = useMemo(() => lastChangePercent > 0, [lastChangePercent]);
  const lastChangeSign = useMemo(() => (hasGoneUp ? '+' : ''), [hasGoneUp]);
  const lastChangeColor = useMemo(
    () => (hasGoneUp ? 'green' : 'red'),
    [hasGoneUp],
  );

  return (
    <Paragraph style={{color: lastChangeColor, ...style}} testID={testID}>
      {`${lastChangeSign}${lastChangePercent}%`}
    </Paragraph>
  );
};

PriceChange.defaultProps = {
  style: {},
};

export default PriceChange;
