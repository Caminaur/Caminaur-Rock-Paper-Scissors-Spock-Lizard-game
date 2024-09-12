import React from "react";
import styles from "./HardButton.module.css";

function HardButton(props) {
  const { difficulty, setDifficulty } = props;
  const newDifficulty = difficulty === "EASY" ? "HARD" : "EASY";

  const button = (
    <button onClick={changeDifficulty} className={styles.rulesBTN}>
      {newDifficulty}
    </button>
  );

  function changeDifficulty() {
    setDifficulty(newDifficulty);
    localStorage.setItem("difficulty", newDifficulty);
  }
  return <>{button}</>;
}

export default HardButton;
