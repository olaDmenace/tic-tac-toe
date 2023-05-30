// import logo from "./logo.svg";
// import "./App.css";
import BG from "./Utils/BG.jpeg";
import Tile from "./Utils/Tile";

function App() {
  return (
    <div className="bg-red-400 h-screen w-full bg-cover bg-center relative grid place-items-center">
      <img
        src={BG}
        className="h-screen w-full absolute object-cover"
        alt="Background"
      />
      <div className="bg-transparent/50 rounded-lg relative w-96 h-96 grid grid-cols-3">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
}

export default App;
