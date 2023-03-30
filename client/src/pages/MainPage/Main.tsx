import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import classes from "./main.module.css";

const Main: React.FC = () => {
  return (
    <>
      <>
        <Header />
        <NavBar />
        <div className={classes.footer_wrapp}>
          <Footer />
        </div>
      </>
    </>
  );
};
export default Main;
