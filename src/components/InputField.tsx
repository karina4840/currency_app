import { WarningCircleIcon } from "@phosphor-icons/react";
import React from "react";

interface InputFieldProps {
  label?: string;
  type?: "text" | "number";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 rounded-md shadow-sm placeholder-theme-text-tertiary focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-transparent focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed theme-input ${
          error ? "border-red-500 focus:ring-red-500" : ""
        } ${className}`}
      />
      {error && (
        <p
          id="error-message"
          className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2"
        >
          <WarningCircleIcon size={16} />
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
