import { WarningCircleIcon, WarningIcon } from "@phosphor-icons/react";
import React from "react";

interface ErrorMessageProps {
  message: string;
  variant?: "error" | "warning";
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  variant = "error",
}) => {
  return (
    <div
      className={`rounded-lg p-4 border ${
        variant === "error"
          ? "theme-bg-error theme-border-error theme-text-error theme-shadow-error"
          : "theme-bg-warning theme-border-warning theme-text-warning theme-shadow-warning"
      }`}
    >
      <div className="flex items-center gap-3">
        {variant === "error" ? (
          <WarningCircleIcon className="w-7 h-7 text-error" />
        ) : (
          <WarningIcon className="w-7 h-7 text-warning" />
        )}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;
