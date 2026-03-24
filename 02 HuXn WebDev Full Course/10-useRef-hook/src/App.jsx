import { useRef } from "react";
import "./App.css";

function App() {
  // initial value of useRef is null
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "Malik";
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Write & Focus</button>
    </div>
  );
}

export default App;
