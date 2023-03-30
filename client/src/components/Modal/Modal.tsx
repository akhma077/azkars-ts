import * as React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthorizationContext } from "../../context/index";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import USER_LOGO_LIGHT from "../../img/user_light.svg";
import USER_LOGO_DARK from "../../img/user-dark.svg";

import classes from "./modal.module.css";
import { Flip, toast } from "react-toastify";

interface IModalProps {
  setActiveMenu: any;
  isActive: boolean;
}

const Modal: React.FC<IModalProps> = ({ setActiveMenu, isActive }) => {
  const { user, theme, toggleTheme }: any =
    React.useContext(AuthorizationContext);

  const navigate = useNavigate();
  const { type } = useParams();

  const handleClickCloseModal = () => {
    setActiveMenu(false);
  };
  const handleCloseTOLogin = () => {
    setActiveMenu(false);
    navigate("/login");
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://azkars.su/${type}`);
    toast.success("Ссылка скопирована!", {
      transition: Flip,
      position: toast.POSITION.TOP_LEFT,
    });
  };

  return (
    <>
      {isActive && (
        <div className={classes.modal} onClick={() => setActiveMenu(false)}>
          <div
            className={classes.modal__content}
            style={{
              background: theme === "dark" ? "#2c2c2c" : "#fff",
              color: theme === "dark" ? "white" : "black",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={classes.list_items}>
              {user && (
                <Link to={"/userPage"}>
                  <li
                    className={classes.userProfileLink}
                    onClick={handleClickCloseModal}
                  >
                    <div className={classes.meni_items_styles}>
                      <img
                        src={
                          theme === "dark" ? USER_LOGO_DARK : USER_LOGO_LIGHT
                        }
                        alt="иконка"
                      />
                      <span>Профиль</span>
                    </div>
                  </li>
                </Link>
              )}
              <li>
                <div className={classes.meni_items_styles}>
                  <AiOutlineCopy
                    className={classes.theme_icons__BsFillMoonStarsFill}
                  />
                  <span onClick={handleCopyLink}>Cкопировать ссылку</span>
                </div>
              </li>
              {!user && (
                <li onClick={handleCloseTOLogin}>
                  <div className={classes.meni_items_styles}>
                    <img
                      src={theme === "dark" ? USER_LOGO_DARK : USER_LOGO_LIGHT}
                      alt="иконка"
                    />
                    <span> Вход</span>
                  </div>
                </li>
              )}
              <li onClick={toggleTheme}>
                <div className={classes.meni_items_styles}>
                  <span>
                    {theme === "ligth" ? (
                      <BsFillBrightnessHighFill
                        className={
                          classes.theme_icons__BsFillBrightnessHighFill
                        }
                      />
                    ) : (
                      <BsFillMoonStarsFill
                        className={classes.theme_icons__BsFillMoonStarsFill}
                      />
                    )}
                  </span>
                  <span>Поменять тему</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
