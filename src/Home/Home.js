import React from "react";
import styles from "./Home.module.scss";
import {ProductSlider} from "../Slider/Slider";


export function Home() {
  return (
    <div>
      <div className={styles.img}>
        <span className={styles.slogan}>DAS BESTE VON AfRIKA</span>
        <span className={styles.sloganPartTwo}>DAS BESTE VON DIR</span>
      </div>
        <ProductSlider />

    </div>
  );
}
