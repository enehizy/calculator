import React from 'react';

function Clear(props){
 

    return (
        <div className="clear-button clear" onClick={()=>{
            
            
            props.changeDisplay((prev)=>{
                 if(prev != null && prev.lenght >= 2){
                  return  `${prev.slice(0,-1)}`
               
            }
            else if(prev.length<2){
              return  null
            }
            
            })
           
            
        }}>
           Clear
        </div>
    )
}
export default Clear;