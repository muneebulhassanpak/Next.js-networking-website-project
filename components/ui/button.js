import React from "react";
import Link from "next/link";

import styles from "./button.module.css";
import ArrowRightIcon from "../icons/arrow-right-icon";

const Button = (props) => {
  if (props.href) {
    return (
      <Link href={props.href} className={styles["btn"]}>
        {props.children}
        <ArrowRightIcon className="icon" />
      </Link>
    );
  }
  return <button className={styles["btn"]}>{props.children}</button>;
};

export default Button;
