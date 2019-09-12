import React ,{Component} from 'react';
import './App.css';


class Numbers extends Component{
    render(){
     return(
        <div className="number-box" onClick={()=>{
            this.props.collectNumber(this.props.number)
        }}>
        {this.props.number}
    </div> 
     )
    }
}
export default Numbers;