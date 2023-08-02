import React, {useCallback, useEffect, useState} from 'react';
import CryptoListTemplate from '../../components/templates/CryptoListTemplate';
import {CryptoCurrency} from '../../interfaces/CryptoCurrency';
import CryptoCurrencyService from '../../services/crypto';
import useInject from '../../container/useInject';

const CryptoListScreen = () => {
  const cryptoCurrencyService = useInject<CryptoCurrencyService>(
    'cryptoCurrencyService',
  );
  const [cryptoData, setCryptoData] = useState<CryptoCurrency[]>([]);
  const [page, setPage] = useState(0);

  const getCryptoCurrencies = useCallback(
    async (currentPage: number) => {
      const data = await cryptoCurrencyService.getCryptoCurrencies(currentPage);
      console.log({data});
      setCryptoData([...cryptoData, ...data]);
    },
    [cryptoCurrencyService, cryptoData],
  );

  useEffect(() => {
    getCryptoCurrencies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return <CryptoListTemplate data={cryptoData} />;
};

export default CryptoListScreen;
