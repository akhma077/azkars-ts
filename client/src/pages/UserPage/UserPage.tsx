import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/UI/Button/Button";
import { AuthorizationContext } from "../../context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination } from "swiper";

import classes from "./user-page.module.css";
import { IData } from "../../types/types";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const UserPage = () => {
  const { user, theme }: any = React.useContext(AuthorizationContext);
  const navigate = useNavigate();
  const handleExit = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className={classes.user_page}>
        <div className={classes.btn__go_back}>
          <Button onClick={handleExit}>Назад</Button>
        </div>

        <div
          className={classes.user_page__content}
          style={{ position: "relative" }}
        >
          <div className={classes.user_page__content__ava} />
          <div className={classes.user_page__content__info}>
            <div className={classes.user_page__content__title}>
              <h2>
                {user?.name} {user?.secondName}
              </h2>

              <span>Избранных азкаров: {user?.favourites?.length}</span>
            </div>
            <Swiper
              slidesPerView={1}
              navigation
              speed={500}
              modules={[Navigation, EffectFade, Pagination]}
              loop
              pagination
            >
              {user?.favourites?.map((item: IData, idx: number) => (
                <SwiperSlide key={idx}>
                  <div className={classes.favourites_data}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3 className={classes.data_map__title}>{item.title}</h3>
                    </div>

                    <p className={classes.data_map__arabicLanguage}>
                      {item.arabicLanguage}
                    </p>
                    <p className={classes.data_map__meaning}>{item.meaning}</p>
                    <p className={classes.data_map__rusLanguange}>
                      {item.rusLanguage}
                    </p>
                    <audio src={item.mp3} controls>
                      Тег audio не поддерживается вашим браузером.
                    </audio>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
