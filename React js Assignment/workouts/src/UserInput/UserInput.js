import React from 'react';

const userinput=(props)=>
{
    return(
           <div className="UserInput">
            <input onChange={props.changed} value={props.username}></input> 
            <input onChange={props.changed} value={props.username}></input> 
           </div>         
    )
};

export default userinput;