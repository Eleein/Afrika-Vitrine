import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.redRibbon}>
      <span className={styles.footerText}>
        <Link className={styles.link} to="/impressum">
          Impressum
        </Link>
      </span>
      <span className={styles.footerText}>
        <Link className={styles.link} to="/kontakt">
          Kontakt
        </Link>
      </span>
      <span className={styles.footerText}>2020 Afrika Vitrine</span>
    </div>
  );
}
