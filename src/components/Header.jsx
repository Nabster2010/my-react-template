import React from "react";
import { useTranslation } from "react-i18next";
import Nav from "./Nav";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  const { t, i18n } = useTranslation();
  const curLng = i18n.language;
  const targetLng = curLng === "en" ? "ar" : "en";
  const changeLng = () => {
    i18n.changeLanguage(targetLng);
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-100 dark:bg-gray-700 dark:text-white">
      <Nav />
      <div className="flex items-center justify-center">
        <ToggleTheme />
        <button className="mx-4 px-4 py-2 border" onClick={changeLng}>
          {targetLng}
        </button>
      </div>
    </header>
  );
};

export default Header;
