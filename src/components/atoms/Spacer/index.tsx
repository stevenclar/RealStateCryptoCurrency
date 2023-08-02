import React, {useMemo} from 'react';
import {View, ViewProps} from 'react-native';

interface SpacerProps extends ViewProps {
  size: number;
  flex?: boolean;
  style?: any;
}

const Spacer = ({size, flex, style, ...rest}: SpacerProps) => {
  const flexStyle = useMemo(() => (flex ? {flex: 1} : {}), [flex]);
  return (
    <View
      testID="spacer"
      style={[{width: size, height: size}, flexStyle, style]}
      {...rest}
    />
  );
};

export default Spacer;
