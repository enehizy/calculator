import React from 'react';
function Equals(props){
   return(
    <div className="symbols equals" onClick={()=>{
        const calculatedValue=eval(props.value);
        props.changeDisplay((prev)=>{
           if(prev != null ){
            return `${calculatedValue}`
           }
              
            
        });
    }}>
    {props.symbol}
    </div>)
}
   
export default Equals;