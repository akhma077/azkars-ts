import * as React from "react";
import { Link } from "react-router-dom";
import LOGO_DARK_THEME from "../../img/header_logo_light.svg";
import LOGO_LIGHT_THEME from "../../img/header_logo_dark.svg";
import MENU_LIGHT from "../../img/menu_light.svg";
import MENU_DARK from "../../img/menu_dark.svg";
import Modal from "../Modal/Modal";
import { AuthorizationContext } from "../../context";

import classes from "./header.module.css";

const Header: React.FC = () => {
  const [isActiveMenu, setActiveMenu] = React.useState<boolean>(false);
  const { theme, toggleTheme }: any = React.useContext(AuthorizationContext);
  return (
    <header className={classes.header}>
      <Modal isActive={isActiveMenu} setActiveMenu={setActiveMenu} />

      <Link to={"/"}>
        <img
          src={theme === "dark" ? LOGO_DARK_THEME : LOGO_LIGHT_THEME}
          alt="logo"
          className={classes.header__logo}
        />
      </Link>

      <Link to="/" className={classes.header__title}>
        Азкары
      </Link>

      <img
        src={theme === "dark" ? MENU_DARK : MENU_LIGHT}
        alt="раскрыть меню"
        className={classes.MENU_ICON}
        onClick={() => setActiveMenu((prev) => !prev)}
      />
    </header>
  );
};

export default Header;
