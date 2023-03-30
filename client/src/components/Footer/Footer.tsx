import * as React from "react";

import classes from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__div}>
        <span className={classes.footer__div__span_1}>Project BismilLah</span>
        <span>azkars@mail.ru</span>
      </div>

      <a href="/" className={classes.footer__a}>
        © 2023 azkars.ru
      </a>
    </footer>
  );
};

export default Footer;
