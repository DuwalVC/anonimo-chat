import "./App.css";
import io from "socket.io-client";

// const socket = io.connect("http://localhost:3001");
// import { useState } from "react";

function App() {
  // const [username, setUser] = userState("");
  // const [room, setRoom] = userState("");

  return (
    <div className="App">
      <h3>Join a CHat</h3>
      <input type="text" placeholder="John..." />
      <input type="text" placeholder="Room ID" />
      <button>Join A Room</button>
    </div>
  );
}

export default App;
