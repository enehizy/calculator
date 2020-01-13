import React from 'react';

function ClearAll(props){
    return (
        <div className="clear-button" onClick={()=>{
            props.changeDisplay(null)
        }}>
           ClearAll
        </div>
    )
}
export default ClearAll;