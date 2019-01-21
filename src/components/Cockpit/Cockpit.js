import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass =classes.Button;
    const assignedClasses = [];
     //if toogled update the class for the button
    if (props.personShow)
        btnClass = [classes.Red, classes.Button].join(' '); 
    if (props.persons.length <= 2)
      assignedClasses.push(classes.red);
    if (props.persons.length <= 1)
      assignedClasses.push(classes.bold);
        

    return(
        <>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            <button 
                className={btnClass}
                onClick={props.toogled}>Toggle Person</button>
        </>
    );
}

export default cockpit;