export const getCurrencyImageUrl = (currency: string) => {
  return `https://cryptoicons.org/api/color/${currency?.toLowerCase()}/200`;
};
