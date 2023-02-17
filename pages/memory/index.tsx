import { useState, useEffect } from "react";

import Navbar from "@components/common/navbar";

const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];
export default function Home() {
  const [boardData, setBoardData] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (matchedCards.length == 16) {
      setGameOver(true);
    }
  }, [moves]);

  const initialize = () => {
    shuffle();
    setGameOver(false);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };
  const shuffle = () => {
    const shuffledCards = [...board, ...board]
      .sort(() => Math.random() - 0.5)
      .map((v) => v);

    setBoardData(shuffledCards);
  };

  const updateActiveCards = (i) => {
    if (!flippedCards.includes(i)) {
      if (flippedCards.length == 1) {
        const firstIdx = flippedCards[0];
        const secondIdx = i;
        if (boardData[firstIdx] == boardData[secondIdx]) {
          setMatchedCards((prev) => [...prev, firstIdx, secondIdx]);
        }

        setFlippedCards([...flippedCards, i]);
      } else if (flippedCards.length == 2) {
        setFlippedCards([i]);
      } else {
        setFlippedCards([...flippedCards, i]);
      }

      setMoves((v) => v + 1);
    }
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="memory-page">
        <div className="container">
          <div className="memory-moves">
            <p>{`Moves - ${moves}`}</p>
          </div>

          <div className="board">
            {boardData.map((data, i) => {
              const flipped = flippedCards.includes(i) ? true : false;
              const matched = matchedCards.includes(i) ? true : false;
              return (
                <div
                  onClick={() => {
                    updateActiveCards(i);
                  }}
                  key={i}
                  className={`card ${flipped || matched ? "active" : ""} ${
                    matched ? "matched" : ""
                  } ${gameOver ? "gameover" : ""}`}
                >
                  <div className="card-front">{data}</div>
                  <div className="card-back"></div>
                </div>
              );
            })}
          </div>
          <div className="reset">
            <p className="font-bold">{`GameOver - ${gameOver}`}</p>
            <button
              onClick={() => initialize()}
              className="
          bg-blue-500 
          hover:bg-blue-700 
          text-white 
          font-bold 
          py-2 
          px-4 
          rounded 
          justify-center"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
