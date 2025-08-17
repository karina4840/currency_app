import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowsLeftRightIcon,
  HouseIcon,
  MoonIcon,
  SunIcon,
} from "@phosphor-icons/react";
import Button from "./Button";

interface HeaderProps {
  className?: string;
  isDarkTheme?: boolean;
  onThemeChange?: (isDarkTheme: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
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
        className={`hidden lg:flex justify-between items-center fixed top-0 left-0 right-0 w-full h-16 px-6 shadow-lg z-50 backdrop-blur-xl border-b ${className}`}
        style={{
          background: 'var(--bg-button-navigation)',
          borderColor: 'var(--border-accent)',
          boxShadow: '0 4px 6px -1px var(--shadow-secondary)'
        }}
      >
        <div className="flex items-center space-x-3">
          <Button
            onClick={() => navigate("/")}
            size="lg"
            fullWidth={false}
            fullHeight={true}
            icon={
              <HouseIcon
                size={18}
                
              />
            }
            variant="navigation"
            isActive={isActive("/")}
          >
            Home
          </Button>

          <Button
            onClick={() => navigate("/converter")}
            size="lg"
            fullWidth={false}
            fullHeight={true}
            icon={
              <ArrowsLeftRightIcon
                size={18}
                
              />
            }
            variant="navigation"
            isActive={isActive("/converter")}
            className="min-w-[100px]"
          >
            Convert
          </Button>

          <Button
            onClick={() => navigate("/currencies")}
            size="lg"
            fullWidth={false}
            fullHeight={true}
            icon={
              <ArrowsLeftRightIcon
                size={18}
              
              />
            }
            variant="navigation"
            isActive={isActive("/currencies")}
            className="min-w-[100px]"
          >
            Currencies
          </Button>
        </div>

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
          {theme ? "Light" : "Dark"}
        </Button>
      </div>
    </>
  );
};

export default Header;
