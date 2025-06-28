// src/layout/ThemeWrapper.jsx
import { useEffect } from "react";

const ThemeWrapper = ({ isDark, children }) => {
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {children}
    </div>
  );
};

export default ThemeWrapper;
