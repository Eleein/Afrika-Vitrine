import React from "react";
import styles from "./Logo.module.scss";
import LogoPic from "../../Images/logo.png"

export function Logo(){
    //the div here is will be 50% min-width
    return <div>
       <img src={LogoPic}/>
    </div>
}