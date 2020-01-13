import React, {useState}from 'react';
import './App.css';
import Numbers from './numbers';
import DisplayBox from './DisplayBox';
import Symbols from './symbols';
import Equals from './equals';
import ClearAll from './clearAll';
import Clear from './clear';
function App(){
const [display,setDisplay]=useState(null);

return(
  
  <div className="calculator-box">
    <h2>Simple Calculator</h2>
  
  <DisplayBox value={display} />
  <Clear value={display} changeDisplay={setDisplay}/><ClearAll changeDisplay={setDisplay}/>
 
  <Symbols symbol="*" collectSymbol={setDisplay}/>
  <Symbols symbol="+" collectSymbol={setDisplay}/>
  <Symbols symbol="-" collectSymbol={setDisplay}/>
  <Symbols symbol="/" collectSymbol={setDisplay}/>
  <Equals value={display} symbol="=" changeDisplay={setDisplay}/>
  <Numbers number={1} collectNumber={setDisplay}/>
  <Numbers number={2} collectNumber={setDisplay}/>
  <Numbers number={3} collectNumber={setDisplay}/>
  <Numbers number={4} collectNumber={setDisplay}/>
  <Numbers number={5} collectNumber={setDisplay}/>
  <Numbers number={6} collectNumber={setDisplay}/>
  <Numbers number={7} collectNumber={setDisplay}/>
  <Numbers number={8} collectNumber={setDisplay}/>
  <Numbers number={9} collectNumber={setDisplay}/>
  <Numbers number={0} collectNumber={setDisplay}/>
  </div>
  
)
}

export default App;
