import React from "react";
import styles from "./Header.module.scss";
import { Menu } from "./Menu/Menu";
import { Logo } from "./Logo/Logo";
import { Search } from "./Search/Search";

export function Header() {
  return (
    <div>
      <div className={styles.yellowRibbon}/>
      <div className={styles.menuLayout}>
        <Menu />
        <Logo />
        <Search />
      </div>
    </div>
  );
}
