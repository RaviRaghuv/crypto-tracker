import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { generateRandomPercentageChange } from '../../utils/helpers';

export interface CryptoAsset {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chart7d: string; // URL to chart image or data points
}

interface CryptoState {
  assets: CryptoAsset[];
  loading: boolean;
  error: string | null;
}

// Initial sample data
const initialState: CryptoState = {
  assets: [
    {
      id: 'bitcoin',
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      price: 93759.48,
      percentChange1h: 0.43,
      percentChange24h: 0.93,
      percentChange7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
      chart7d: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
    },
    {
      id: 'ethereum',
      rank: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
      price: 1802.46,
      percentChange1h: 0.60,
      percentChange24h: 3.21,
      percentChange7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: 120.71,
      maxSupply: null,
      chart7d: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg',
    },
    {
      id: 'tether',
      rank: 3,
      name: 'Tether',
      symbol: 'USDT',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
      price: 1.00,
      percentChange1h: 0.00,
      percentChange24h: 0.00,
      percentChange7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92288882007,
      circulatingSupply: 145.27,
      maxSupply: null,
      chart7d: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    },
    {
      id: 'xrp',
      rank: 4,
      name: 'XRP',
      symbol: 'XRP',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
      price: 2.22,
      percentChange1h: 0.46,
      percentChange24h: 0.54,
      percentChange7d: 6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      circulatingSupply: 58.39,
      maxSupply: 100,
      chart7d: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    },
    {
      id: 'bnb',
      rank: 5,
      name: 'BNB',
      symbol: 'BNB',
      logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
      price: 606.65,
      percentChange1h: 0.09,
      percentChange24h: -1.20,
      percentChange7d: 3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      circulatingSupply: 140.89,
      maxSupply: 200,
      chart7d: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg',
    },
  ],
  loading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets.forEach((asset) => {
        // Random price change between -0.5% and +0.5%
        const priceChange = asset.price * (Math.random() * 0.01 - 0.005);
        asset.price = parseFloat((asset.price + priceChange).toFixed(2));
        
        // Update percentage changes
        asset.percentChange1h = parseFloat(generateRandomPercentageChange(asset.percentChange1h, 0.2).toFixed(2));
        asset.percentChange24h = parseFloat(generateRandomPercentageChange(asset.percentChange24h, 0.3).toFixed(2));
        asset.percentChange7d = parseFloat(generateRandomPercentageChange(asset.percentChange7d, 0.1).toFixed(2));
        
        // Update volume
        const volumeChange = asset.volume24h * (Math.random() * 0.02 - 0.01);
        asset.volume24h = parseFloat((asset.volume24h + volumeChange).toFixed(0));
      });
    },
    setAssets: (state, action: PayloadAction<CryptoAsset[]>) => {
      state.assets = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Selectors
export const selectAllAssets = (state: RootState) => state.crypto.assets;
export const selectAssetById = (state: RootState, id: string) => 
  state.crypto.assets.find(asset => asset.id === id);
export const selectLoading = (state: RootState) => state.crypto.loading;
export const selectError = (state: RootState) => state.crypto.error;

export const { updatePrices, setAssets, setLoading, setError } = cryptoSlice.actions;

export default cryptoSlice.reducer; 