import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import CurrencyConverter from "./pages/CurrencyConverter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CurrenciesPage from "./pages/CurrenciesPage";
import MadeBy from "./components/MadeBy";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const [themeLoaded, setThemeLoaded] = useState(false);

  // Load theme from localStorage on initial mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      
      if (savedTheme) {
        setTheme(savedTheme === "dark");
      } 
      setThemeLoaded(true);
    } catch (error) {
      console.warn("Failed to load theme from localStorage:", error);
    }
  }, []);

  // Apply theme changes to DOM and save to localStorage
  useEffect(() => {
    if (!themeLoaded) return; // Don't apply theme until it's loaded
    
    try {
      // Set the data-theme attribute on the document element
      document.documentElement.setAttribute('data-theme', theme ? 'dark' : 'light');
      
      // Also set body class for compatibility
      document.body.classList.remove("light", "dark");
      document.body.classList.add(theme ? "dark" : "light");

      // Save to localStorage
      localStorage.setItem("theme", theme ? "dark" : "light");
    } catch (error) {
      console.warn("Failed to save theme to localStorage:", error);
    }
  }, [theme, themeLoaded]);
  
  const handleThemeChange = (newTheme: boolean) => {
    setTheme(newTheme);
  };

  // Don't render until theme is loaded to prevent flash
  if (!themeLoaded) {
    return null;
  }

  return (
    <HashRouter>
      <div className="App">
        <Header isDarkTheme={theme} onThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/converter" element={<CurrencyConverter />} />
          <Route path="/currencies" element={<CurrenciesPage />} />
        </Routes>
        <Footer isDarkTheme={theme} onThemeChange={handleThemeChange} />
        <MadeBy />
      </div>
    </HashRouter>
  );
}

export default App;
