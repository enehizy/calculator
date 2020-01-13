import React from 'react';

function Clear(props){
 

    return (
        <div className="clear-button" onClick={()=>{
            props.changeDisplay(`${props.value.slice(0,-1)}`)
            
        }}>
           Clear
        </div>
    )
}
export default Clear;