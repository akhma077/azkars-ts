import React from "react";
import axios from "axios";
import InputFileds from "../../common/UI/InputField/InputField";
import Button from "../../common/UI/Button/Button";
import LOGO from "../../img/header_logo_dark.svg";

import classes from "./adminPanel.module.css";
import { toast } from "react-toastify";

const AdminPanel: React.FC = () => {
  // СОЗДАНИЕ КОНТЕНЬА !!!!
  const [value, setValue] = React.useState<string>("");
  const [valueAranbic, setValueArabic] = React.useState<string>("");
  const [valueMeaning, setValueMeaning] = React.useState<string>("");
  const [valueRusLanguange, setValueRusLanguange] = React.useState<string>("");
  const [type, setType] = React.useState<string>();
  const [mp3Value, setMp3Value] = React.useState<string>("");

  // СОЗДАНИЕ NAVBAR

  const [title, setTitle] = React.useState<string>("");
  const [file, setFile] = React.useState<any>("");
  const [route, setROute] = React.useState<string>("");

  const [titleCreate, setTitleCreate] = React.useState<string>("");
  const [typeCrete, setTypeCreate] = React.useState<string>("");

  const LOCAL_API = "192.168.88.76";

  const LOCAL_API_PORT = "9099";

  const handlerOnChange = (event: any) => {
    event.preventDefault();
    const File = event.target.files[0];
    setFile(File);
  };

  // Cоздание типа и title

  const titleType = () => {
    axios({
      method: "POST",
      url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/titletype`,
      data: {
        title: titleCreate,
        type: typeCrete,
      },
    });
  };
  //  ФУНКЦИЯ ДЛЯ СОЗДАНИЯ КОНТЕНТА

  const handleClick = () => {
    axios({
      method: "POST",
      url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/content/create`,
      data: {
        title: value,
        arabicLanguage: valueAranbic,
        meaning: valueMeaning,
        rusLanguage: valueRusLanguange,
        type: type,
        mp3: mp3Value,
      },
    });

    setValueMeaning("");
    setValueArabic("");
    setValueRusLanguange("");
    setMp3Value("");

    titleType();
  };

  // ЗАПРОС НА СОЗАДАНИЕ  НОВОЙ СТРАНИЦЫ

  const handleClickNewRoute = () => {
    if (title && route !== "") {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", file);
      formData.append("route", route);

      axios({
        method: "POST",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/navbar`,
        data: formData,
      });
      // setTitle("");
      // setROute("");
      // setImage("");
    } else {
      toast.error("Не все поля заполнены");
    }
  };

  const handleClickNewRouteGetALl = () => {
    try {
      const response = axios({
        method: "GET",
        url: `http://${LOCAL_API}:${LOCAL_API_PORT}/api/navbar`,
      });
      console.log(response);
    } catch (error) {}
  };

  return (
    <div className={classes.adminPanel}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <img src={LOGO} alt="logo" width={80} />
        <h1 className={classes.adminPanel__title}>Админ панель</h1>
      </div>
      <label htmlFor="label">СОЗДАНИЕ КОНТЕНТА</label>
      <div className={classes.new_content}>
        <InputFileds
          placeholder="Заголовок азкара"
          type="text"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />

        <InputFileds
          placeholder="Текст на арабском"
          type="text"
          value={valueAranbic}
          onChange={(e: any) => setValueArabic(e.target.value)}
        />

        <InputFileds
          placeholder="Смысл"
          type="text"
          value={valueMeaning}
          onChange={(e: any) => setValueMeaning(e.target.value)}
        />

        <InputFileds
          placeholder="Транскипция на русском"
          type="text"
          value={valueRusLanguange}
          onChange={(e: any) => setValueRusLanguange(e.target.value)}
        />

        <InputFileds
          placeholder="Тип Азкара"
          type="text"
          value={type}
          onChange={(e: any) => setType(e.target.value)}
        />

        <InputFileds
          placeholder="Адресс аудио"
          type="text"
          value={mp3Value}
          onChange={(e: any) => setMp3Value(e.target.value)}
        />
        <InputFileds
          placeholder="Заголовок азкаров"
          type="text"
          value={titleCreate}
          onChange={(e: any) => setTitleCreate(e.target.value)}
        />
        <InputFileds
          placeholder="Тип азкаров"
          type="text"
          value={typeCrete}
          onChange={(e: any) => setTypeCreate(e.target.value)}
        />
      </div>

      <div className={classes.adminPanel__btn_send}>
        <Button onClick={handleClick}>Создать контент</Button>
      </div>

      <div className={classes.addNewRoute}>
        <label htmlFor="label">СОЗДАНИЕ НОВОЙ СТРАНИЦЫ</label>
        <InputFileds
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder={"Название новой страницы"}
        />
        <InputFileds
          type="text"
          value={route}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setROute(e.target.value)
          }
          placeholder={"Название пути"}
        />

        <InputFileds
          type="file"
          onChange={handlerOnChange}
          placeholder={"Выберите фотографию"}
        />

        <div className={classes.adminPanel__btn_send}>
          <Button onClick={handleClickNewRoute}>Создать</Button>
        </div>
        <div className={classes.adminPanel__btn_send}>
          <Button onClick={handleClickNewRouteGetALl}>Получить</Button>
        </div>
      </div>
    </div>
  );
};
export default AdminPanel;
