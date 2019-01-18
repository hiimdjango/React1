import React from 'react';
import classes from './Person.css';
import Radium from 'radium';

const person = (props) => {
    
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name}, I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(person);