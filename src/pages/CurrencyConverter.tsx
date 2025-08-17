import React, { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ResultCard from "../components/ResultCard";
import ErrorMessage from "../components/ErrorMessage";

import {
  setAmount,
  setBase,
  setResult,
  setTarget,
  clearResult,
} from "../features/currencySlice";
import { fetchRates } from "../features/currencyThunks";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { ArrowsLeftRightIcon } from "@phosphor-icons/react";

const CurrencyConverter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { base, target, amount, rates, result, loading, error } =
    useAppSelector((state) => state.currency);
  const [amountError, setAmountError] = useState<string | null>(null);
  const [isValidAmount, setIsValidAmount] = useState(false);
  const [conversionError, setConversionError] = useState<string | null>(null);

  const availableBaseCurrencies =
    Object.keys(rates).length > 0
      ? Object.keys(rates)
      : ["GBP", "USD", "EUR", "JPY", "AUD", "CAD", "CHF", "CNY"];
  const availableTargetCurrencies = Object.keys(rates).filter(
    (currency) => currency !== base && rates[currency]
  );

  useEffect(() => {
    if (base) {
      dispatch(fetchRates(base));
    }
  }, [base, dispatch]);

  useEffect(() => {
    if (base && Object.keys(rates).length === 0) {
      dispatch(fetchRates(base));
    }
  }, [base, dispatch, rates]); // Empty dependency array - only run once on mount

  // Validate amount input
  useEffect(() => {
    if (!amount) {
      setAmountError(null);
      setIsValidAmount(false);
      return;
    }

    const numAmount = parseFloat(amount);

    if (isNaN(numAmount)) {
      setAmountError("Please enter a valid number");
      setIsValidAmount(false);
    } else if (numAmount <= 0) {
      setAmountError("Amount must be greater than 0");
      setIsValidAmount(false);
    } else if (amount.includes(".") && amount.split(".")[1]?.length > 2) {
      setAmountError("Amount can have maximum 2 decimal places");
      setIsValidAmount(false);
    } else {
      setAmountError(null);
      setIsValidAmount(true);
    }
  }, [amount]);

  const handleConvert = () => {
    if (!isValidAmount || !target || !rates[target]) return;

    const numAmount = parseFloat(amount);
    const rate = rates[target];
    const convertedAmount = numAmount * rate;

    if (convertedAmount === 0) {
      setConversionError(
        "Conversion results in 0. Please try a different amount or currency pair."
      );
      dispatch(clearResult());
      return;
    }

    if (convertedAmount < 0.01) {
      setConversionError(
        "Conversion result is too small (less than 0.01). Please try a larger amount or different currency pair."
      );
      dispatch(clearResult());
      return;
    }

    setConversionError(null);
    dispatch(setResult(parseFloat(convertedAmount.toFixed(2))));
  };

  const handleAmountChange = (value: string) => {
    // numbers and decimal points only
    const allowedValue = value.replace(/[^0-9.]/g, "");

    // allow only one decimal point
    const decimalCount = (allowedValue.match(/\./g) || []).length;
    if (decimalCount > 1) return;

    // Prevent numbers starting with 0 unless there's a decimal point
    if (
      allowedValue.startsWith("0") &&
      allowedValue.length > 1 &&
      !allowedValue.includes(".")
    ) {
      return; // Don't allow numbers like 09876
    }

    // Prevent multiple zeros at the start (like 00.5)
    if (allowedValue.startsWith("00") && !allowedValue.includes(".")) {
      return;
    }

    dispatch(setAmount(allowedValue));
    dispatch(clearResult());
  };

  const handleBaseChange = (value: string) => {
    dispatch(setBase(value));
    dispatch(clearResult());
  };

  const handleTargetChange = (value: string) => {
    dispatch(setTarget(value));
    dispatch(clearResult());
  };

  const handleSwapCurrencies = () => {
    if (base && target) {
      dispatch(setBase(target));
      dispatch(setTarget(base));
      dispatch(clearResult());
    }
  };

  const isConvertDisabled =
    !isValidAmount || !target || loading || !rates[target];

  // Clear conversion error when amount or currencies change
  useEffect(() => {
    setConversionError(null);
  }, [amount, base, target]);

  return (
    <div className="min-h-screen theme-bg-primary px-10 pt-10 pb-32 lg:pt-32 lg:pb-10">
      <div className="w-full flex flex-col items-center justify-start max-w-2xl mx-auto">
        {/* Header */}
        <div className="w-full text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold theme-text-primary mb-4">
            Currency Converter
          </h1>
          <p className="text-lg theme-text-secondary">
            Convert currencies with real-time exchange rates
          </p>
        </div>

        {/* Main Form */}
        <div className="w-full flex flex-col items-center justify-center gap-6 theme-card rounded-lg p-6 md:p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConvert();
            }}
            className="w-full space-y-6"
          >
            {/* Currency Selection */}
            <div className=" grid grid-cols-1 md:grid-cols-3 items-end gap-4">
              <Dropdown
                label="From"
                options={availableBaseCurrencies}
                value={base}
                onChange={handleBaseChange}
                disabled={loading}
              />

              {/* Swap Button */}
              <div className="flex items-center justify-center">
                <Button
                  onClick={handleSwapCurrencies}
                  disabled={!base || !target || loading}
                  variant="icon"
                  size="sm"
                  className="w-12 h-12 rounded-full p-0 hover:scale-110 transition-transform duration-300"
                  icon={<ArrowsLeftRightIcon className="w-5 h-5" />}
                />
              </div>

              <Dropdown
                label="To"
                options={
                  availableTargetCurrencies.length > 0
                    ? availableTargetCurrencies
                    : availableBaseCurrencies.filter((c) => c !== base)
                }
                value={target}
                onChange={handleTargetChange}
                disabled={loading || availableTargetCurrencies.length === 0}
                placeholder={
                  availableTargetCurrencies.length === 0
                    ? "Loading currencies..."
                    : "Select currency"
                }
              />
            </div>

            {/* Amount Input */}
            <InputField
              label="Amount"
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount (e.g., 100.50)"
              error={amountError || undefined}
              disabled={loading}
            />

            {/* Error Messages */}
            {error && <ErrorMessage message={error} variant="error" />}
            {conversionError && (
              <ErrorMessage message={conversionError} variant="warning" />
            )}

            {/* Convert Button */}
            <Button
              onClick={handleConvert}
              disabled={isConvertDisabled}
              fullWidth
              size="lg"
              type="submit"
            >
              {loading ? "Converting.." : "Convert"}
            </Button>
          </form>

          {/* Loading State */}
          {loading && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-4 py-2 text-sm text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500 dark:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Fetching latest exchange rates...
              </div>
            </div>
          )}

          {/* Conversion Result */}
          {result && target && rates[target] && !conversionError && (
            <ResultCard
              result={result}
              baseCurrency={base}
              targetCurrency={target}
              amount={amount}
              rate={rates[target]}
            />
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm theme-text-tertiary">
          <p>Exchange rates are updated daily from reliable sources</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
