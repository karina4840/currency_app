import React from 'react';
import { getFlagForCurrency } from '../utils/currencyHelpers';

interface CurrencyCardProps {
  currencyCode: string;
  rate?: number;
  baseCurrency?: string;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ 
  currencyCode, 
  rate, 
  baseCurrency = 'GBP' 
}) => {
  const flagUrl = getFlagForCurrency(currencyCode, 'flat', 32);
  
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {flagUrl && (
            <img 
              src={flagUrl} 
              alt={`${currencyCode} flag`} 
              className="w-8 h-6 object-cover rounded-sm"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          )}
          <div>
            <h3 className="text-lg font-medium">{currencyCode}</h3>
            {rate && (
              <p className="text-sm text-gray-600">
                1 {baseCurrency} = {rate.toFixed(4)} {currencyCode}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;