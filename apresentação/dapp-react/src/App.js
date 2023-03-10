
import { useState } from 'react';
import {ethers}
import ABI from './abi.json';
import './App.css';
 
function App() {
 
  const [customerId, setCustomerId] = useState("0");
  const [error, setError] = useState("");
 
  function onSearchClick() {
    console.log(customerId);
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <label>Customer ID: <input type="number" value={customerId} onChange={(evt) => setCustomerId(evt.target.value)} /></label>
        </p>
        <p>
          <input type="button" value="Search" onClick={onSearchClick} />
        </p>
        <p style="color:red;">
          {error}
        </p>
      </header>
    </div>
  );
}
 
export default App;