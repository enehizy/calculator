import React from 'react';


function DisplayBox(props){
    
      const value =(props.value == null)?'':props.value;
       // return(<div className="display-box">{props.value}</div>)
       return (<input type="text" value={value} className="display-box" readOnly />)
       }
export default DisplayBox;