import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="title">Decimal - Binary Converter</h2>

        <div>
          <div className="input-wrapper">
            <label for="dec-inp">Decimal:</label>
            <input type="number" id="dec-inp" />
          </div>
          <div className="input-wrapper">
            <label for="bin-inp">Binary:</label>
            <input type="number" id="bin-inp" />
          </div>
        </div>
        <p id="error-msg">Sample Error Message</p>
      </div>
    </div>
  );
}

export default App;
