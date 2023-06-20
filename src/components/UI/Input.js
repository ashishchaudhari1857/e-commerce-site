import classes from './Input.module.css'
 import React from 'react';
const Input =((props)=>{
    return <div className={classes.input}> 
        <label >{props.label}</label>
        <input  name={props.name} {...props.input}/>
    </div>
});
export default Input;