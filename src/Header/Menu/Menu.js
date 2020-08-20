import React from "react";
import styles from "./Menu.module.scss";
import { ReactComponent as Hamburger } from "../../Images/hamburger.svg";
import {ReactComponent as SearchIcon} from "../../Images/searchIcon.svg";

export function Menu() {
  return (
    <nav className={styles.navContainer}>
      <Hamburger className={styles.hamburger} />

      <SearchIcon className={styles.searchIcon}/>

      {/*<ul className={styles.navigationMenu}>*/}
      {/*    <li className={styles.navigationList}>SHOP</li>*/}
      {/*    <li className={styles.navigationList}>UBER UNS</li>*/}
      {/*    <li className={styles.navigationList}>KONTAK</li>*/}
      {/*</ul>*/}
    </nav>
  );
}
