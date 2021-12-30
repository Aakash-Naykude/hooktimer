import { Timer } from "./componants/Timer.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  let [showcount, setShowcount] = useState(false);

  return (
    <div className="App">
      {showcount && <Timer />}
      <br />
      <button onClick={() => setShowcount(!showcount)}>Show/hide counter</button>
    </div>
  );
}

export default App;
