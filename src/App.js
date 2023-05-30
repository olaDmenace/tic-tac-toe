// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import BG from "./Utils/BG.jpeg";
import Tile from "./Utils/Tile";

function App() {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    tile[i] = isX ? "X" : "O";
    setTile(tile);
    setIsX(!isX);
  };

  return (
    <div className="bg-red-400 h-screen w-full bg-cover bg-center relative grid">
      <img
        src={BG}
        className="h-screen w-full absolute object-cover"
        alt="Background"
      />
      <div className="place-self-center grid gap-10">
        <div className="bg-transparent/50 rounded-lg relative w-96 h-96 grid grid-cols-3">
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
        <button className="bg-blue-500 mx-auto relative rounded-md px-4 py-2 text-white/60">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
