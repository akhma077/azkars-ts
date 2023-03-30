import React from "react";
import { useData } from "../../hooks/useData";
import { IData, ITitle } from "../../types/types";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination } from "swiper";
import { useNavigate, useParams } from "react-router-dom";
import ItemId from "./ItemId";
import Header from "../Header/Header";
import Button from "../../common/UI/Button/Button";

import classes from "./azkars-content.module.css";

export interface IContent {
  data: IData[];
  title: ITitle;
}
const AzkarsContent: React.FC = () => {
  const [content, setContent] = React.useState<IContent>();

  const { type }: any = useParams();

  const { isLoading } = useData(type, setContent);

  const navigate = useNavigate();
  const handleExit = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />

      <div className={classes.morning_main_div}>
        <div className={classes.btn__go_back}>
          <Button onClick={handleExit}>Назад</Button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div style={{ position: "relative" }}>
            <div className={classes.morning_banner}>
              <span className={classes.morning_banner__span}>
                {content?.title.title}
              </span>
            </div>
            <Swiper
              slidesPerView={1}
              navigation
              speed={500}
              modules={[Navigation, EffectFade, Pagination]}
              loop
              effect="cube"
              pagination
            >
              {content?.data?.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className={classes.data_map}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3 className={classes.data_map__title}>{item.title}</h3>

                      <div>
                        <ItemId item={item} setContent={setContent} idx={idx} />
                        <img alt="" />
                      </div>
                    </div>

                    <p className={classes.data_map__arabicLanguage}>
                      {item.arabicLanguage}
                    </p>

                    <p className={classes.data_map__meaning}> {item.meaning}</p>

                    <p className={classes.data_map__rusLanguange}>
                      {item.rusLanguage}
                    </p>

                    {item.mp3 && (
                      <audio src={item.mp3} controls>
                        Тег audio не поддерживается вашим браузером.
                      </audio>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div style={{ marginTop: "20px" }}>
              <Footer />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AzkarsContent;
