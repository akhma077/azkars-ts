import * as React from "react";
import LOGO_DARK_THEME from "../../img/header_logo_light.svg";
import LOGO_LIGHT_THEME from "../../img/header_logo_dark.svg";
import InputFileds from "../../common/UI/InputField/InputField";
import Button from "../../common/UI/Button/Button";
import { Link } from "react-router-dom";
import { useRegisterForm } from "../../hooks/useRegisterForm";
import TYPE_TEXT from "../../img/text1.svg";
import TYPE_PASS from "../../img/pass.svg";

import classes from "./RegisterForm.module.css";

const RegiaterForm = () => {
  const [name, setName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState<boolean>(false);

  const theme = localStorage.getItem("app-theme");
  const { refetch } = useRegisterForm(email, password, name, secondName);

  const handleClickRegister = async (e: any) => {
    e.preventDefault();
    await refetch();
  };

  const handleShowPassword = () => {
    setShowPass((prev: boolean) => !prev);
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
          <Link to="/" className={classes.link}></Link>
        </div>
        <div className={classes.form__content__title}></div>

        <div className={classes.form__content__styles}>
          <InputFileds
            type="text"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            placeholder="Имя"
          />
          <InputFileds
            type="text"
            value={secondName}
            onChange={(e: any) => setSecondName(e.target.value)}
            placeholder="Фамилия"
          />

          <InputFileds
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="Электронная почта"
          />
          <div className={classes.show_pass}>
            <InputFileds
              type={showPass ? "text" : "password"}
              value={password}
              placeholder="Пароль"
              onChange={(e: any) => setPassword(e.target.value)}
            />

            <div
              onClick={handleShowPassword}
              className={classes.show_pass__div}
            >
              <img
                src={showPass ? TYPE_TEXT : TYPE_PASS}
                alt="показать/скрыть"
              />
            </div>
          </div>

          <Link to={"/login"} className={classes.form__content__text}>
            Уже есть аккаунт? Войдите
          </Link>
        </div>

        <div className={classes.btn_next}>
          <Button onClick={handleClickRegister}>Зарегистрироваться</Button>
        </div>
        <div className={classes.text}>
          Нажимая кнопку зарегистрироваться Вы принимаете политику
          конфиденциальности и пользовательское соглашение, а также даёте
          согласие на обработку персональных данных
        </div>
      </div>
    </form>
  );
};

export default RegiaterForm;
