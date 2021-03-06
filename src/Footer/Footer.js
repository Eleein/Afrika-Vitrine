import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export function Footer() {
    const footerPaths = {
        impressum: "impressum",
        kontakt: "kontakt",
    }
  return (
    <div className={styles.redRibbon}>
      <span className={styles.footerText}>
        <Link className={styles.link} to={footerPaths.impressum}>
          Impressum
        </Link>
      </span>
      <span className={styles.footerText}>
        <Link className={styles.link} to={footerPaths.kontakt}>
          Kontakt
        </Link>
      </span>
      <span className={styles.footerText}>2020 Afrika Vitrine</span>
    </div>
  );
}
