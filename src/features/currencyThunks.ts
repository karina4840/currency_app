// src/features/currency/currencyThunks.ts
import axios from 'axios';
import { setRates, setError, setLoading } from './currencySlice';
import type { AppDispatch } from '../app/store';

export const fetchRates = (base: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));
  try {
    const response = await axios.get(`https://www.floatrates.com/daily/${base.toLowerCase()}.json`);
    
    // Extract exchange rates from the API response
    // The API returns an object where keys are currency codes and values contain rate information
    const rates: Record<string, number> = {};
    Object.keys(response.data).forEach(currencyCode => {
      if (response.data[currencyCode] && response.data[currencyCode].rate) {
        rates[currencyCode.toUpperCase()] = response.data[currencyCode].rate;
      }
    });
    
    dispatch(setRates(rates));
  } catch (error) {
    console.error('API Error:', error);
    dispatch(setError('Failed to fetch exchange rates. Please try again later.'));
  } finally {
    dispatch(setLoading(false));
  }
};
