import * as React from "react";
import arrow from "../../img/arrow.svg";

import classes from "./arrow.module.css";

interface HeroArrowProps {
  scrollBarFunction: any;
}

const HeroArrow: React.FC<HeroArrowProps> = ({ scrollBarFunction }) => {
  return (
    <div className={classes.hero__arrow} onClick={scrollBarFunction}>
      <img src={arrow} alt="hero arrow" />
    </div>
  );
};

export default HeroArrow;
