import React from "react";
import styles from "./Option.module.css";

function Option(props) {
  if (props.type === "empty") {
    return <div className={`${styles.option} ${styles.empty}`}></div>;
  }
  return (
    <div
      data-option={props.type}
      className={styles.option}
      data-winner={props.winner}
      data-loading={props.loading}
    >
      <img src={`/icon-${props.type}.svg`} alt="" />
    </div>
  );
}

export default Option;
