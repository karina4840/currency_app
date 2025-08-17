interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "navigation" | "icon";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  fullHeight?: boolean;
  type?: "button" | "submit";
  className?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  fullHeight = false,
  type = "button",
  className = "",
  icon,
  isActive = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none";

  const variantClasses = {
    primary: " hover:-translate-y-1 rounded-lg border theme-button-primary",
    secondary: " hover:-translate-y-1 rounded-lg border theme-button-secondary",
    navigation: "hover:scale-105 rounded-lg transition-all duration-300",
    icon: "hover:scale-105 transition-transform duration-300 rounded-full",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const widthClasses = fullWidth ? "w-full" : "";
  const heightClasses = fullHeight ? "h-full" : "";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed transform-none"
    : "cursor-pointer";

  const activeClasses = isActive ? "border-purple-400/50" : "";

  const getButtonStyles = () => {
    if (variant === "navigation") {
      return {
        background: "transparent",
        color: "var(--text-primary)",
      };
    }
    if (variant === "icon") {
      return {
        background: "var(--bg-button-icon)",
        color: "var(--text-primary)",
        border: "1px solid var(--border-accent)",
      };
    }
    return {};
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${heightClasses} ${disabledClasses} ${activeClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={getButtonStyles()}
    >
      <div className="w-full h-full flex items-center justify-center gap-2">
        {icon}
        {children}
      </div>
    </button>
  );
};

export default Button;
