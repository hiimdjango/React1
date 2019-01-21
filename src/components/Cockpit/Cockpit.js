import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass ='';
    const assignedClasses = [];
    if (props.personShow)
        btnClass = classes.Red; 
    if (props.persons.length <= 2)
      assignedClasses.push(classes.red);
    if (props.persons.length <= 1)
      assignedClasses.push(classes.bold);
    //if (props.personShow)
        

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            <button 
                className={btnClass}
                onClick={props.toogled}>Toggle Person</button>
        </div>
    );
}

export default cockpit;