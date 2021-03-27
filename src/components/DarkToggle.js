import React from "react";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";

import "../styles/DarkToggle.css";

const DARK_CLASS = "dark";

export const DarkToggle = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );
  const [isDark, setIsDark] = React.useState(systemPrefersDark);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  return (
    <Toggle
      className="DarkToggle"
      checked={isDark}
      onChange={(e) => setIsDark(e.target.checked)}
      icons={{ checked: "🌙", unchecked: "🌞" }}
      aria-label="Dark mode"
    />
  );
};
