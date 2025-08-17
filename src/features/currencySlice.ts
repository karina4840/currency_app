// src/features/currency/currencySlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {
  base: string;
  target: string;
  amount: string;
  result: number | null;
  rates: Record<string, number>;
  loading: boolean;
  error: string | null;
}

const initialState: CurrencyState = {
  base: "GBP",
  target: "USD",
  amount: "",
  result: null,
  rates: {},
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setBase: (state, action: PayloadAction<string>) => {
      state.base = action.payload;
      state.rates = {};
      state.result = null;
      // Reset target if it's the same as the new base
      if (state.target === action.payload) {
        state.target = "";
      }
    },
    setTarget: (state, action: PayloadAction<string>) => {
      state.target = action.payload;
      state.result = null;
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
      state.result = null;
    },
    setRates: (state, action: PayloadAction<Record<string, number>>) => {
      state.rates = action.payload;
      // Add base currency with rate 1.0
      state.rates[state.base] = 1.0;

      // Set default target if none is selected
      if (!state.target && Object.keys(action.payload).length > 0) {
        const availableCurrencies = Object.keys(action.payload).filter(
          (c) => c !== state.base
        );
        if (availableCurrencies.length > 0) {
          state.target = availableCurrencies[0];
        }
      }
    },
    setResult: (state, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearResult: (state) => {
      state.result = null;
    },
  },
});

export const {
  setBase,
  setTarget,
  setAmount,
  setRates,
  setResult,
  setLoading,
  setError,
  clearResult,
} = currencySlice.actions;

export default currencySlice.reducer;
