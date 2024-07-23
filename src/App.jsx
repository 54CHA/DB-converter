
import "./App.css";

function App() {
  window.onload=function(){
  let decInp = document.getElementById("dec-inp");
  let binInp = document.getElementById("bin-inp");
  let errorMsg = document.getElementById("error-msg");

  decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    binInp.value = decValue.toString(2);
  });

  binInp.addEventListener(
    "input", () => {
      let binValue = binInp.value;
      if(binValidator(binValue)){
            decInp.value = parseInt(binValue, 2);
            errorMsg.textContent = "";
      }

      else {
      errorMsg.textContent = "Please enter a valid binary input"
      }

      function binValidator(num){
        for(let i=0; i <num.length; i++){
          if(num[i] != "0" && num[i] != "1"){
            return false;
          }
        }
        return true;
      }
    }
  )
}
  return (
    <div className="container">
      <h2>Decimal Binary Converter</h2>
      <div className="wrapper">
        <div className="input-wrapper">
          <label for="dec-inp">Decimal:</label>
          <input type="number" id="dec-inp" />
        </div>
        <div className="input-wrapper">
          <label for="bin-inp">Binary:</label>
          <input type="number" id="bin-inp"/>
        </div>
      </div>
      <p id="error-msg"></p>
    </div>
  
  );
}

export default App;
