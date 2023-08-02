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
  const [hasMore, setHasMore] = useState(true);

  const getCryptoCurrencies = useCallback(
    async (currentPage: number) => {
      if (hasMore) {
        const data = await cryptoCurrencyService.getCryptoCurrencies(
          currentPage,
        );
        if (data.length === 0) {
          setHasMore(false);
        }
        setCryptoData([...cryptoData, ...data]);
      }
    },
    [cryptoCurrencyService, cryptoData, hasMore],
  );

  useEffect(() => {
    getCryptoCurrencies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return <CryptoListTemplate data={cryptoData} loadMore={handleLoadMore} />;
};

export default CryptoListScreen;
