import React, {useMemo, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Avatar} from 'react-native-paper';
import {getCurrencyImageUrl} from '../../../utils/crypto/getCurrencyImageUrl';

interface CryptoImageProps {
  abbreviation: string;
  width?: number;
  height?: number;
}

const CryptoImage = ({abbreviation, width, height}: CryptoImageProps) => {
  const [errorImage, setErrorImage] = useState(!abbreviation);
  const currencyUrlImage = useMemo(
    () => getCurrencyImageUrl(abbreviation),
    [abbreviation],
  );
  return (
    <>
      {currencyUrlImage && !errorImage && (
        <FastImage
          testID="crypto-image"
          source={{uri: currencyUrlImage}}
          resizeMode={FastImage.resizeMode.contain}
          onError={() => {
            setErrorImage(true);
          }}
          style={{width, height}}
        />
      )}
      {errorImage && (
        <Avatar.Icon size={width} icon="bitcoin" testID="crypto-avatar" />
      )}
    </>
  );
};

CryptoImage.defaultProps = {
  width: 40,
  height: 40,
  abbreviation: null,
};

export default CryptoImage;
