import { Timer } from "./componants/Timer.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  let [showcount, setShowcount] = useState(false);
  let [name, setName] = useState("Show");
  const handleChange = () => {
    setShowcount(!showcount);
    if(showcount === true){
      setName("Show")
    } else {
      setName("Hide")
    }
  };
  return (
    <div className="App">
      {showcount && <Timer />}
      <br />
      <button onClick={handleChange}>{name}</button>
    </div>
  );
}

export default App;
