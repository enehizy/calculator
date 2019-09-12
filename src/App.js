import React, {Component}from 'react';
import './App.css';
import Numbers from './numbers.js';

class App extends Component{

  state={
    number:null,
    symbol:null,
    newNumber:null,
    numberFilled:false
    
  }
  calculate(num){
    if(!this.state.numberFilled){
      this.setState({
        number:num,
        numberFilled:true
          })
        
    }
    else{
      this.setState({
        newNumber:num
          })
    }
  }
   
render(){
  return (
    <div className="App">
      {this.state.number} &nbsp; {this.state.symbol} &nbsp; {this.state.newNumber} &nbsp;=&nbsp; {this.state.symbol == '+' &&(
        this.state.number + this.state.newNumber
  )} &nbsp; {this.state.symbol == '-' &&(
    this.state.number - this.state.newNumber
)} &nbsp; {this.state.symbol == '*' &&(
  this.state.number * this.state.newNumber
)}
{this.state.symbol == '/' &&(
  this.state.number / this.state.newNumber
)}
      <Numbers number={1} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={2} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={3} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={4} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={5} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={6} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={7} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={8} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={9} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <Numbers number={0} collectNumber={(number)=>{
        this.calculate(number)
      }}/>
      <div className='number-box' onClick={()=>{
        this.setState({
          symbol:'+'
        })
      }}>
        +
      </div>
      <div className='number-box' onClick={()=>{
        this.setState({
          symbol:'-'
        })
      }}>
        -
      </div>
      <div className='number-box' onClick={()=>{
        this.setState({
          symbol:'*'
        })
      }}>
        x
      </div>
      <div className='number-box' onClick={()=>{
        this.setState({
          symbol:'/'
        })
      }}>
        /
      </div>
    </div>
  )
}
}

export default App;
