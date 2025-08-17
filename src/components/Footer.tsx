import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowsLeftRightIcon,
  HouseIcon,
  MoonIcon,
  SunIcon,
  CurrencyDollarIcon,
} from "@phosphor-icons/react";
import Button from "./Button";

interface FooterProps {
  className?: string;
  isDarkTheme?: boolean;
  onThemeChange?: (isDarkTheme: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({
  className = "",
  isDarkTheme = false,
  onThemeChange,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(isDarkTheme);

  useEffect(() => {
    setTheme(isDarkTheme);
  }, [isDarkTheme]);

  const isActive = (path: string) => location.pathname === path;

  const handleThemeChange = () => {
    setTheme(!isDarkTheme);
    if (onThemeChange) {
      onThemeChange(!isDarkTheme);
    }
  };

  return (
    <>
      <div
        className={`flex lg:hidden justify-between items-center fixed bottom-0 left-0 right-0 w-full h-16 px-4 border-t shadow-lg z-50 backdrop-blur-xl ${className}`}
        style={{
          background: 'var(--bg-button-navigation)',
          borderColor: 'var(--border-accent)',
          boxShadow: '0 4px 6px -1px var(--shadow-secondary)'
        }}
      >
        <Button
          onClick={() => navigate("/")}
          size="lg"
          fullWidth={false}
          fullHeight={true}
          icon={<HouseIcon size={18} />}
          variant="navigation"
          isActive={isActive("/")}
        >
          <div className="hidden sm:block">Home</div>
        </Button>

        <Button
          onClick={() => navigate("/converter")}
          size="lg"
          fullWidth={false}
          fullHeight={true}
          icon={<ArrowsLeftRightIcon size={18} />}
          variant="navigation"
          isActive={isActive("/converter")}
        >
          <div className="hidden sm:block">Convert</div>
        </Button>

        <Button
          onClick={() => navigate("/currencies")}
          size="lg"
          fullWidth={false}
          fullHeight={true}
          icon={<CurrencyDollarIcon size={18} />}
          variant="navigation"
          isActive={isActive("/currencies")}
        >
          <div className="hidden sm:block">Currencies</div>
        </Button>

        <Button
          onClick={handleThemeChange}
          size="lg"
          fullWidth={false}
          fullHeight={true}
          icon={
            isDarkTheme ? (
              <SunIcon size={18} className="text-amber-300" />
            ) : (
              <MoonIcon size={18} className="text-purple-800" />
            )
          }
          variant="navigation"
        >
          <div className="hidden sm:block">
            {theme ? "Light" : "Dark"}
          </div>
        </Button>
      </div>
    </>
  );
};

export default Footer;
