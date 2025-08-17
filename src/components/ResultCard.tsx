import React from "react";
import { getFlagForCurrency } from "../utils/currencyHelpers";
import { ArrowsLeftRightIcon } from "@phosphor-icons/react";

interface ResultCardProps {
  baseCurrency: string;
  targetCurrency: string;
  amount: string;
  rate: number;
  result: number;
}

const ResultCard: React.FC<ResultCardProps> = ({
  baseCurrency,
  targetCurrency,
  amount,
  rate,
}) => {
  const convertedAmount = parseFloat(amount) * rate;
  const baseFlagUrl = getFlagForCurrency(baseCurrency, "flat", 24);
  const targetFlagUrl = getFlagForCurrency(targetCurrency, "flat", 24);

  return (
    <div className="theme-bg-secondary rounded-lg border-1 theme-border-accent p-6 backdrop-blur-sm">
      <div className="text-center space-y-4">
        <h3 className="text-lg font-semibold theme-text-primary">
          Conversion Result
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

          {/* Base Currency */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {baseFlagUrl && (
                <img
                  src={baseFlagUrl}
                  alt={`${baseCurrency} flag`}
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              )}
              <span className="text-sm font-medium theme-text-primary">
                {baseCurrency}
              </span>
            </div>
            <span className="text-2xl font-bold theme-text-primary">
              {parseFloat(amount).toFixed(2)}
            </span>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center">
            <ArrowsLeftRightIcon className="w-5 h-5 theme-text-primary" />
          </div>

          {/* Target Currency */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {targetFlagUrl && (
                <img
                  src={targetFlagUrl}
                  alt={`${targetCurrency} flag`}
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              )}
              <span className="text-sm font-medium theme-text-primary">
                {targetCurrency}
              </span>
            </div>
            <span className="text-2xl font-bold theme-text-primary">
              {convertedAmount.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="theme-bg-tertiary rounded-lg p-3 border-1 theme-border-secondary">
          <p className="text-sm theme-text-secondary">
            1 {baseCurrency} = {rate.toFixed(2)} {targetCurrency}
          </p>
        </div>
        <div className="theme-bg-secondary rounded-lg p-1 border-1 theme-border-secondary">
          <span className="text-xs theme-text-tertiary mt-1">
            Rate: {rate.toFixed(4)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
