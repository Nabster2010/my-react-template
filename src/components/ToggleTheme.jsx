import React from "react";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import Switch from "./Switch";

const ToggleTheme = () => {
  const [storedValue, setValue] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    storedValue === "dark" ? false : true
  );
  const toggleTheme = (e) => {
    setDarkMode(!darkMode);
    setValue(darkMode === true ? "dark" : "light");
  };

  return <Switch isActive={darkMode} toggle={toggleTheme} />;
};

export default ToggleTheme;
