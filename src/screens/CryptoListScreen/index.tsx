import React, {useEffect, useState} from 'react';
import CryptoListTemplate from '../../components/templates/CryptoListTemplate';
import {CryptoCurrency} from '../../interfaces/CryptoCurrency';

const CryptoListScreen = () => {
  const [cryptoData, setCryptoData] = useState<CryptoCurrency[]>([]);

  useEffect(() => {
    const dummyCryptoList: CryptoCurrency[] = [
      {
        id: '1',
        abbreviation: 'BTC',
        name: 'Bitcoin',
        price: 42000,
        lastHourChange: 0.5,
      },
      {
        id: '2',
        abbreviation: 'ETH',
        name: 'Ethereum',
        price: 2800,
        lastHourChange: -0.2,
      },
    ];
    setCryptoData(dummyCryptoList);
  }, []);
  return <CryptoListTemplate data={cryptoData} />;
};

export default CryptoListScreen;
