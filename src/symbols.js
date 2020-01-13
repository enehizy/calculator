import React from 'react';

function Symbols(props){
return(
    <div className="symbols" onClick={()=>{
        props.collectSymbol((prev)=>{
    
             if(prev!=null){
                return `${prev} ${props.symbol}`
             }
          
        })
    }}>
    {props.symbol}
    </div>
)
}
export default Symbols;