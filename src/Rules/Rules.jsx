import React, { useState } from "react";
import styles from "./Rules.module.css";

function Rules(props) {
  const { difficulty } = props;
  const [showRules, SetShowRules] = useState(false);
  const button = (
    <button onClick={setRulesState} className={styles.rulesBTN}>
      Rules
    </button>
  );
  const modal = (
    <>
      <div className={styles.layer}></div>
      <div className={styles.modalRules}>
        <div className={styles.row}>
          <p className={styles.title}>Rules</p>
          <img
            onClick={setRulesState}
            className={styles.close}
            src="./icon-close.svg"
            alt=""
          />
        </div>
        {difficulty === "EASY" ? (
          <img className={styles.rulesImage} src="./image-rules.svg" alt="" />
        ) : (
          <img
            className={styles.rulesImage}
            src="./image-rules-bonus.svg"
            alt=""
          />
        )}
      </div>
    </>
  );

  function setRulesState() {
    SetShowRules(!showRules);
  }

  return showRules ? (
    <>
      {button} {modal}
    </>
  ) : (
    button
  );
}

export default Rules;
