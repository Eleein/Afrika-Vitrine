import React from "react";
import styles from "./Image.module.scss";


export function Image({src}){
    return(
        <div className={styles.categoriesLayout}>
            <img className={styles.categoryImage} src={src} alt={"my-image"}/>
        </div>
    )
}