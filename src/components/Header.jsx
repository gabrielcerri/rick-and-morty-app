//si uso templates dentro de HTML en un componente uso la extension jsx

import React from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="header">
      <h1>React Hooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};
