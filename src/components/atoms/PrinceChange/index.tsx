import React, {useMemo} from 'react';
import {Paragraph} from 'react-native-paper';

interface PrinceChangeProps {
  lastChangePercent: number;
}

const PrinceChange = ({lastChangePercent}: PrinceChangeProps) => {
  const hasGoneUp = useMemo(() => lastChangePercent > 0, [lastChangePercent]);
  const lastChangeSign = useMemo(() => (hasGoneUp ? '+' : ''), [hasGoneUp]);
  const lastChangeColor = useMemo(
    () => (hasGoneUp ? 'green' : 'red'),
    [hasGoneUp],
  );

  return (
    <Paragraph style={{color: lastChangeColor}}>
      {`${lastChangeSign}${lastChangePercent}%`}
    </Paragraph>
  );
};

export default PrinceChange;
