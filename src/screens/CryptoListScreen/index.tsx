import React, {useEffect, useState} from 'react';
import {Crypto} from '../../components/molecules/CryptoItem';
import CryptoListTemplate from '../../components/templates/CryptoListTemplate';

const CryptoListScreen = () => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);

  useEffect(() => {
    const dummyCryptoList: Crypto[] = [
      {
        id: '1',
        icon: 'bitcoin',
        abbreviation: 'BTC',
        name: 'Bitcoin',
        price: 42000,
        lastHourChange: 0.5,
      },
      {
        id: '2',
        icon: 'ethereum',
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
