import React, {useMemo, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {Avatar} from 'react-native-paper';
import {getCurrencyImageUrl} from '../../../utils/crypto/getUrlImage';

interface CryptoImageProps {
  abbreviation: string;
  width?: number;
  height?: number;
}

const CryptoImage = ({abbreviation, width, height}: CryptoImageProps) => {
  const [errorImage, setErrorImage] = useState(false);
  const currencyUrlImage = useMemo(
    () => getCurrencyImageUrl(abbreviation),
    [abbreviation],
  );
  return (
    <>
      {currencyUrlImage && !errorImage && (
        <FastImage
          source={{uri: currencyUrlImage}}
          resizeMode={FastImage.resizeMode.contain}
          onError={() => {
            setErrorImage(true);
          }}
          style={{width, height}}
        />
      )}
      {errorImage && <Avatar.Icon size={width} icon="bitcoin" />}
    </>
  );
};

CryptoImage.defaultProps = {
  width: 40,
  height: 40,
};

export default CryptoImage;
