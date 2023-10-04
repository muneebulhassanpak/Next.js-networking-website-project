import React from "react";
import styles from "./MessageModal.module.css";

const MessageModal = (props) => {
  return <div className={styles["modal"]}>{props.children}</div>;
};

export default MessageModal;
