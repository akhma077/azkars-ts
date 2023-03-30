import * as React from "react";
import LOGO_DARK_THEME from "../../img/header_logo_light.svg";
import LOGO_LIGHT_THEME from "../../img/header_logo_dark.svg";

import classes from "./loader.module.css";

const Loader: React.FC = () => {
  const theme = localStorage.getItem("app-theme");

  return (
    <div className={classes.main_plug}>
      <img
        src={theme === "dark" ? LOGO_DARK_THEME : LOGO_LIGHT_THEME}
        alt="logo"
        className={classes.main_plug_icon}
      />
    </div>
  );
};

export default Loader;
