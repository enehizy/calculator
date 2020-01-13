import React from 'react';
import './App.css';


function Numbers (props){
    return(
    <div className="number" onClick={()=>{
        props.collectNumber((prev)=>{
            if(prev !=null){
                return `${prev}${props.number}`
            }else{
                return `${props.number}`
            }
           
        })
    }}>
       {props.number} 
    </div> 
    )

}
export default Numbers;