import React from "react";
import styles from "./Navbar.module.css";

function Navbar(props) {
  const { score, difficulty } = props;

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        {difficulty === "EASY" ? (
          <img src={`/logo.svg`} alt="" />
        ) : (
          <img src={`/logo-bonus.svg`} alt="" />
        )}
      </div>
      <div className={styles.score}>
        <p>score</p>
        <p>{score}</p>
      </div>
    </div>
  );
}

export default Navbar;
