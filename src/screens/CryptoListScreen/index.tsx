import React, {useCallback, useEffect, useState} from 'react';
import CryptoListTemplate from '../../components/templates/CryptoListTemplate';
import CryptoCurrencyService from '../../services/crypto';
import useInject from '../../container/useInject';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {fetchCryptoCurrency} from '../../store/cryptoCurrency/cryptoCurrencySlice';

const CryptoListScreen = () => {
  const dispatch = useAppDispatch();
  const cryptoCurrencyService = useInject<CryptoCurrencyService>(
    'cryptoCurrencyService',
  );
  const isListEnding = useAppSelector(
    state => state.cryptoCurrencies.isListEnding,
  );
  const [page, setPage] = useState(0);

  const getCryptoCurrencies = useCallback(
    async (currentPage: number) => {
      if (!isListEnding) {
        dispatch(
          fetchCryptoCurrency(
            cryptoCurrencyService.getCryptoCurrencies(currentPage),
          ),
        );
      }
    },
    [cryptoCurrencyService, dispatch, isListEnding],
  );

  useEffect(() => {
    getCryptoCurrencies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  return <CryptoListTemplate loadMore={handleLoadMore} />;
};

export default CryptoListScreen;
