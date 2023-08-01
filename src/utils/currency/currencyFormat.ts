export const currencyFormat = (value: number) => {
  if (isNaN(value)) {
    return 'NaN';
  }
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
