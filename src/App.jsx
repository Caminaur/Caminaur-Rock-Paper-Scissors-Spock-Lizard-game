import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Rules from "./Rules/Rules";
import { useState } from "react";
import HardButton from "./HardButton/HardButton";

function App() {
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("EASY");

  useState(() => {
    let score = localStorage.getItem("score") ?? 0;
    let difficulty = localStorage.getItem("difficulty") ?? "EASY";

    setScore(parseInt(score));
    setDifficulty(difficulty);
  }, []);
  return (
    <>
      <Navbar score={score} difficulty={difficulty} />
      <Outlet context={{ setScore, score, difficulty }} />
      <HardButton difficulty={difficulty} setDifficulty={setDifficulty} />
      <Rules difficulty={difficulty} />
    </>
  );
}

export default App;
