import React from "react";

const Tile = (props) => {
  return (
    <div
      className="grid place-items-center border border-slate-300 rounded-lg"
      onClick={props.onClick}
    >
      <p className="text-6xl font-medium text-blue-700">{props.value}</p>
    </div>
  );
};

export default Tile;
