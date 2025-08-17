import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getFlagForCurrency } from "../utils/currencyHelpers";
import Button from "./Button";
import { setBase } from "../features/currencySlice";
import { fetchRates } from "../features/currencyThunks";

interface CurrencyGridProps {
  className?: string;
}

const CurrencyGrid: React.FC<CurrencyGridProps> = ({ className = "" }) => {
  const {
    rates,
    base = "GBP",
    loading,
    error,
  } = useAppSelector((state) => state.currency);

  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currenciesPerPage] = useState(10);

  useEffect(() => {
    if (base && Object.keys(rates).length === 0) {
      dispatch(fetchRates(base));
    }
  }, [base, dispatch, rates]);

  useEffect(() => {
    setCurrentPage(1);
  }, [base]);

  if (loading) {
    return (
      <div
        className={`rounded-xl shadow-lg border-1 p-6 ${className}`}
        style={{
          background: "var(--gradient-card)",
          borderColor: "var(--border-accent)",
          boxShadow: "0 4px 6px -1px var(--shadow-card)",
        }}
      >
        <div className="flex items-center justify-center space-x-3">
          <div
            className="w-6 h-6 border-1 border-t-transparent rounded-full animate-spin"
            style={{ borderColor: "var(--accent-purple)" }}
          ></div>
          <span style={{ color: "var(--text-primary)" }}>
            Loading currencies...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`rounded-xl shadow-lg border-1 p-6 ${className}`}
        style={{
          background: "var(--bg-error)",
          borderColor: "var(--border-error)",
          boxShadow: "0 4px 6px -1px var(--shadow-error)",
        }}
      >
        <div className="text-center" style={{ color: "var(--text-error)" }}>
          <p>Error loading currencies: {error}</p>
        </div>
      </div>
    );
  }

  if (Object.keys(rates).length === 0) {
    return (
      <div
        className={`rounded-xl shadow-lg border-1 p-6 ${className}`}
        style={{
          background: "var(--gradient-card)",
          borderColor: "var(--border-accent)",
          boxShadow: "0 4px 6px -1px var(--shadow-card)",
        }}
      >
        <div className="flex flex-col gap-6 items-center text-center">
          <p style={{ color: "var(--text-primary)" }}>
            No currencies available. Please try again later.
          </p>
          <Button
            onClick={() => {
              dispatch(setBase("GBP"));
              dispatch(fetchRates("GBP"));
            }}
            className="w-1/3"
            size="sm"
            variant="secondary"
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  const availableCurrencies = Object.keys(rates).filter(
    (currency) => currency !== base
  );

  const totalPages =
    Math.ceil(availableCurrencies.length / currenciesPerPage);
  const startIndex = (currentPage - 1) * currenciesPerPage;
  const endIndex = startIndex + currenciesPerPage;
  const currentCurrencies = availableCurrencies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show smart pagination with ellipsis
      if (currentPage <= 3) {
        // Near start: show first 3 + ... + last
        for (let i = 1; i <= 3; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near end: show first + ... + last 3
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i);
      } else {
        // Middle: show first + ... + current ± 1 + ... + last
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div
      className={`rounded-xl shadow-lg border-1 p-4 backdrop-blur-sm ${className}`}
      style={{
        background: "var(--gradient-card)",
        borderColor: "var(--border-accent)",
        boxShadow: "0 4px 6px -1px var(--shadow-card)",
      }}
    >
      {/* Header with pagination info */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h3
          className="text-xl font-bold text-center sm:text-left mb-4 sm:mb-0"
          style={{ color: "var(--text-primary)" }}
        >
          Available Currencies for {base}
          <span
            className="block text-sm font-normal mt-1"
            style={{ color: "var(--text-secondary)" }}
          >
            {availableCurrencies.length} currencies available
          </span>
        </h3>

        {/* Pagination info */}
        <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Page {currentPage} of {totalPages}
          <span className="ml-2">
            (Showing {startIndex + 1}-
            {Math.min(endIndex, availableCurrencies.length)} of{" "}
            {availableCurrencies.length})
          </span>
        </div>
      </div>

      {/* Currency Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentCurrencies.map((currencyCode) => {
          const flagUrl = getFlagForCurrency(currencyCode, "flat", 64);
          const rate = rates[currencyCode];

          return (
            <div
              key={currencyCode}
              className="group rounded-lg border-1 p-4 transition-all duration-300 hover:-translate-y-1 cursor-pointer backdrop-blur-sm"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-accent)",
                boxShadow: "0 2px 4px var(--shadow-card)",
              }}
            >
              <div className="flex items-center space-x-3 mb-3">
                {flagUrl && (
                  <img
                    src={flagUrl}
                    alt={`${currencyCode} flag`}
                    className="w-8 h-6 object-cover rounded-md shadow-sm group-hover:shadow-md transition-shadow duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                )}
                <div className="flex flex-col">
                  <span
                    className="font-bold text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {currencyCode}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div
                  className="rounded-md p-2 border"
                  style={{
                    background: "var(--bg-tertiary)",
                    borderColor: "var(--border-accent)",
                  }}
                >
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Exchange Rate
                  </span>
                  <div
                    className="text-sm font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {rate?.toFixed(4)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              variant="secondary"
              size="sm"
            >
              First
            </Button>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="secondary"
              size="sm"
            >
              Previous
            </Button>
          </div>

          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => (
              <div key={index}>
                {page === "..." ? (
                  <span
                    className="px-3 py-2 text-sm"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    ...
                  </span>
                ) : (
                  <Button
                    onClick={() => handlePageChange(page as number)}
                    variant={currentPage === page ? "primary" : "secondary"}
                    size="sm"
                    className="min-w-[40px]"
                  >
                    {page}
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="secondary"
              size="sm"
            >
              Next
            </Button>
            <Button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              variant="secondary"
              size="sm"
            >
              Last
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyGrid;
