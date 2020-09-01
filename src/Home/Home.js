import React from "react";
import styles from "./Home.module.scss";
import { ProductSlider } from "../Slider/Slider";

export function Home() {
  return (
    <div>
      <div className={styles.img}>
        <span className={styles.slogan}>DAS BESTE VON AfRIKA</span>
        <span className={styles.sloganPartTwo}>DAS BESTE VON DIR</span>
      </div>
      <ProductSlider />
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          Spezialist für Haarkunst und Produkte des afrikanischen Marktes.
        </p>
        <p className={styles.descriptionText}>
          Kommen Sie vorbei und machen Sie sich einen ersten Eindruck über uns.
        </p>
      </div>
    </div>
  );
}
