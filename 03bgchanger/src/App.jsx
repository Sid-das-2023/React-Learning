import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-500 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-4 py-3 rounded-3xl shadow-lg">
          <button
            onMouseOver={() => {
              setColor("black");
            }}
            onMouseOut={() => {
              setColor("red");
            }}
            className="outline-none px-4 text-white rounded-full shadow-lg py-1"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onMouseOver={() => {
              setColor("blue");
            }}
            onMouseOut={() => {
              setColor("red");
            }}
            className="outline-none px-4 text-white rounded-full shadow-lg py-1"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onMouseOver={() => {
              setColor("green");
            }}
            onMouseOut={() => {
              setColor("red");
            }}
            className="outline-none px-4 text-white rounded-full shadow-lg py-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onMouseOver={() => {
              setColor("yellow");
            }}
            onMouseOut={() => {
              setColor("red");
            }}
            className="outline-none px-4 text-black rounded-full shadow-lg py-1"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
