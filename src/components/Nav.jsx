import React from "react";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul className="flex items-center justify-center gap-4">
        <li className="">
          <a href="#">{t("navigation.link1")}</a>
        </li>
        <li>
          <a href="#">{t("navigation.link2")}</a>
        </li>
        <li>
          <a href="#">{t("navigation.link3")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
