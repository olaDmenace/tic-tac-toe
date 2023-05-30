// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import BG from "./Utils/BG.jpeg";
import Tile from "./Utils/Tile";

function App() {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (winningCard(tile) || tile[i]) {
      return;
    }

    tile[i] = isX ? "X" : "O";
    setTile(tile);
    setIsX(!isX);
  };

  const reset = () => {
    setIsX(true);
    setTile(Array(9).fill(null));
  };

  const winningCard = (tile) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < patterns.length; i++) {
      const [a, b, c] = patterns[i];

      if (tile[a] && tile[a] === tile[b] && tile[b] === tile[c]) {
        return tile[a];
      }
    }
    return null;
  };

  const winner = winningCard(tile);
  let status;

  if (winner) {
    status = `Winner is ${winner}`;
  } else {
    status = `Next Player is ${isX ? "X" : "O"}`;
  }

  return (
    <div className="bg-red-400 h-screen w-full bg-cover bg-center relative grid">
      <img
        src={BG}
        className="h-screen w-full absolute object-cover"
        alt="Background"
      />
      <div className="place-self-center grid gap-10 relative">
        <div className="bg-transparent/50 rounded-lg w-96 h-96 grid grid-cols-3">
          <Tile value={tile[0]} onClick={() => handleClick(0)} />
          <Tile value={tile[1]} onClick={() => handleClick(1)} />
          <Tile value={tile[2]} onClick={() => handleClick(2)} />
          <Tile value={tile[3]} onClick={() => handleClick(3)} />
          <Tile value={tile[4]} onClick={() => handleClick(4)} />
          <Tile value={tile[5]} onClick={() => handleClick(5)} />
          <Tile value={tile[6]} onClick={() => handleClick(6)} />
          <Tile value={tile[7]} onClick={() => handleClick(7)} />
          <Tile value={tile[8]} onClick={() => handleClick(8)} />
        </div>
        <p className="mx-auto text-2xl text-white/70">{status}</p>
        <button
          className="bg-blue-500 mx-auto rounded px-4 py-2 hover:bg-blue-800 text-white/50 font-semibold text-2xl"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
