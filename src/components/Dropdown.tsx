import React from "react";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  label,
  disabled = false,
  placeholder,
  className,
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-transparent focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed theme-input ${className || ""}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
