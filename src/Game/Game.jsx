import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Option from "../Option/Option";
import styles from "./Game.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";
function Game() {
  const { setScore, score, difficulty } = useOutletContext();

  console.log(difficulty);

  const location = useLocation();
  const resp = location;
  const navigate = useNavigate();
  const [enemy, setEnemy] = useState(false);
  let user = resp.state.result.winner === "user";
  let pc = !user;
  if (resp.state.result.winner === "tied") {
    user = false;
    pc = false;
  }

  function playAgain() {
    navigate("/");
  }

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const step2 = async () => {
    await delay(2000);
    setEnemy(true);

    if (user === true) {
      const newScore = score + 1;
      setScore((score) => newScore);
      localStorage.setItem("score", newScore);
    }
  };
  useEffect(() => {
    step2();
  }, []);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameOption}>
        <p>You Picked</p>
        <Option type={resp.state.user} winner={user} />
      </div>
      {enemy ? (
        <div className={`${styles.gameOption} ${styles.message}`}>
          <p>{resp.state.result.message}</p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      ) : (
        <div
          className={styles.defaultCircle}
          style={{
            height: "200px",
            width: "300px",
            flex: 2,
            flexBasis: "100%",
          }}
        ></div>
      )}

      <div className={styles.gameOption}>
        <p>The House Picked</p>
        {enemy ? (
          <Option type={resp.state.pc} winner={pc} loading={true} />
        ) : (
          <Option type="empty" winner={null} />
        )}
      </div>
    </div>
  );
}

export default Game;
