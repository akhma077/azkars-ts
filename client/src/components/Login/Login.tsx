import * as React from "react";
import LOGO_DARK_THEME from "../../img/header_logo_light.svg";
import LOGO_LIGHT_THEME from "../../img/header_logo_dark.svg";
import classes from "./login.module.css";
import { Link } from "react-router-dom";
import InputFileds from "../../common/UI/InputField/InputField";
import Button from "../../common/UI/Button/Button";
import { useSignIn } from "../../hooks/useSignIn";
import { ISignInData } from "../../types/types";

const Login: React.FC = () => {
  const [userData, setUserData] = React.useState<ISignInData>();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const theme = localStorage.getItem("app-theme");
  const { refetch } = useSignIn(email, password, setUserData);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await refetch();
  };

  return (
    <form className={classes.form}>
      <div className={classes.form__content}>
        <div className={classes.form__content__div}>
          <img
            src={theme === "dark" ? LOGO_DARK_THEME : LOGO_LIGHT_THEME}
            alt="logo"
            className={classes.login__logo}
          />
          <a href="/" className={classes.link}></a>
        </div>
        <div className={classes.form__content__title}></div>

        <div className={classes.form__content__styles}>
          <InputFileds
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Телефон / Email"
          />
          <InputFileds
            type="text"
            value={password}
            placeholder="Пароль"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Link to={"/registerForm"} className={classes.form__content__text}>
            Нет аккаунта? зарегистрируйтесь!
          </Link>
        </div>
        <div className={classes.btn_next}>
          <Button onClick={handleClick}>Войти</Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
