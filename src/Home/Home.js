import React from "react";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <div>
      <div className={styles.img}>
        <span className={styles.slogan}>Das BESTE VON AfRIKA</span>
        <span className={styles.slogan}>DAS BESTE VON DIR</span>
      </div>
    </div>
  );
}
