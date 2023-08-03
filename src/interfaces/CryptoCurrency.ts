export interface CryptoCurrency {
  id: string;
  abbreviation: string;
  name: string;
  price: number;
  lastHourChange: number;
  percentChange24h?: number;
  percentChange7d?: number;
  priceBtc?: number;
  marketCapUsd?: number;
  volume24?: number;
  volume24Native?: number;
  csupply?: number;
  tsupply?: number;
  msupply?: number;
  historicalData?: number[];
}
