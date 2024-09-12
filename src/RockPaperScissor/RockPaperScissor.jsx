import React from "react";
import styles from "./RockPaperScissor.module.css";
import stylesH from "./RockPaperScissorHard.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";

function RockPaperScissor() {
  const { difficulty } = useOutletContext();
  const options = ["rock", "paper", "scissors"];
  const navigate = useNavigate();

  function select(e) {
    const option = e.currentTarget.dataset.option;
    const randomOption = getRandomOption();
    const winner = whoWins(option, randomOption);
    const data = {
      user: option,
      pc: randomOption,
      result: winner,
    };
    navigate("/game", { state: data });
  }

  function getRandomOption() {
    return options[Math.floor(Math.random() * 3)];
  }

  function whoWins(option1, option2) {
    if (option1 === option2) {
      return { winner: "tied", message: "Draw" };
    }

    // ===============================================
    if (option1 === "rock" && option2 === "scissors") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "rock" && option2 === "lizard") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "rock" && option2 === "paper") {
      return { winner: "pc", message: "You lose" };
    }
    if (option1 === "rock" && option2 === "spock") {
      return { winner: "pc", message: "You lose" };
    }
    // ===============================================

    // ===============================================
    if (option1 === "lizard" && option2 === "spock") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "lizard" && option2 === "paper") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "lizard" && option2 === "rock") {
      return { winner: "pc", message: "You lose" };
    }
    if (option1 === "lizard" && option2 === "scissors") {
      return { winner: "pc", message: "You lose" };
    }
    // ===============================================

    // ===============================================
    if (option1 === "spock" && option2 === "scissors") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "spock" && option2 === "rock") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "spock" && option2 === "paper") {
      return { winner: "pc", message: "You lose" };
    }
    if (option1 === "spock" && option2 === "lizard") {
      return { winner: "pc", message: "You lose" };
    }
    // ===============================================

    if (option1 === "paper" && option2 === "rock") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "paper" && option2 === "spock") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "paper" && option2 === "lizard") {
      return { winner: "pc", message: "You lose" };
    }
    if (option1 === "paper" && option2 === "scissors") {
      return { winner: "pc", message: "You lose" };
    }

    if (option1 === "scissors" && option2 === "paper") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "scissors" && option2 === "lizard") {
      return { winner: "user", message: "You Win" };
    }
    if (option1 === "scissors" && option2 === "spock") {
      return { winner: "pc", message: "You lose" };
    }
    if (option1 === "scissors" && option2 === "rock") {
      return { winner: "pc", message: "You lose" };
    }
  }

  return difficulty === "EASY" ? (
    <div className={styles.container}>
      <div className={styles.optionContainer}>
        <div
          onClick={(e) => select(e)}
          data-option="paper"
          className={styles.option}
        >
          <img src="/icon-paper.svg" alt="" />
        </div>
        <div
          onClick={(e) => select(e)}
          data-option="scissors"
          className={styles.option}
        >
          <img src="/icon-scissors.svg" alt="" />
        </div>
        <div
          onClick={(e) => select(e)}
          data-option="rock"
          className={styles.option}
        >
          <img src="/icon-rock.svg" alt="" />
        </div>
      </div>
    </div>
  ) : (
    <div className={stylesH.container}>
      <div className={stylesH.optionContainer}>
        <div
          onClick={(e) => select(e)}
          data-option="spock"
          className={stylesH.option}
        >
          <img src="/icon-spock.svg" alt="" />
        </div>
        <div
          onClick={(e) => select(e)}
          data-option="scissors"
          className={stylesH.option}
        >
          <img src="/icon-scissors.svg" alt="" />
        </div>
        <div
          onClick={(e) => select(e)}
          data-option="paper"
          className={stylesH.option}
        >
          <img src="/icon-paper.svg" alt="" />
        </div>
        <div
          onClick={(e) => select(e)}
          data-option="lizard"
          className={stylesH.option}
        >
          <img src="/icon-lizard.svg" alt="" />
        </div>
        <div
          onClick={(e) => select(e)}
          data-option="rock"
          className={stylesH.option}
        >
          <img src="/icon-rock.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RockPaperScissor;
