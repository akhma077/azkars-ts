import React from "react";
import { Link } from "react-router-dom";
import Dialog from "../../common/UI/Dialog/Dialog";
import { AuthorizationContext } from "../../context";

import classes from "./navigation.module.css";

const NavBar: React.FC = () => {
  const [activeDialog, setActiveDialog] = React.useState<boolean>(false);
  const { theme }: any = React.useContext(AuthorizationContext);
  const [model, setModel] = React.useState([]);

  return (
    <main className={classes.navigation}>
      <div
        className={classes.navigation__modal_btn}
        style={{
          background: theme === "dark" ? "#2c2c2c" : "#fff",
          color: theme === "dark" ? "white" : "black",
        }}
        onClick={() => setActiveDialog((prev) => !prev)}
      >
        <span className={classes.disc}>
          Награды и Достоинства чтения азкаров.
        </span>
      </div>
      {activeDialog && <Dialog setActiveDialog={setActiveDialog} />}
      <section className={classes.navigation__first_section}>
        <Link to="/morning">
          <div className={classes.morning_azkars_page}>
            <span className={classes.morning_azkars_page__span}>
              Азкары после утренней молитвы.
            </span>
          </div>
        </Link>

        <Link to="/evening">
          <div className={classes.enening_page}>
            <span className={classes.morning_azkars_page__span}>
              Азкары после вечерней молитвы.
            </span>
          </div>
        </Link>
      </section>
      <section className={classes.navigation__second_section}>
        <Link to="/ramadan">
          <div
            className={classes.newModalStyles}
            style={{
              backgroundImage:
                "url(https://azkar.ru/img/categories/other1.png)",
              marginBottom: "20px",
            }}
          >
            <span className={classes.morning_azkars_page__span}>
              Дуа в месяц Рамадан
            </span>
          </div>
        </Link>

        <Link to="/important">
          <div className={classes.important_page}>
            <span className={classes.morning_azkars_page__span}>
              Важные дуа.
            </span>
          </div>
        </Link>

        <Link to="/after">
          <div className={classes.after_page}>
            <span className={classes.morning_azkars_page__span}>
              Азкары после каждой молитвы.
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default NavBar;
