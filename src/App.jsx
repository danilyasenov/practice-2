import React from "react";
import Article from "./components/Article";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <Article />
    </div>
  );
}

export default App;
