import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      {id:'0' ,name:"Ahmed", age:23},
      {id:'1' ,name:"Omar",age:28},
      {id:'2' ,name:"Aymen",age:29}
    ],
    personShow : false
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  changedNameHandler = ( event,id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons });
  }
  tooglePersonHandler = () => {
    const personShown = this.state.personShow;
    this.setState({personShow:!personShown});
  }
  render() {    
    let person = null;
    let btnClass ='';
    if (this.state.personShow === true) {
      //Rendering multiple Person component using .map()
      person = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              name={person.name}
              age={person.age} 
              click={this.deletePersonHandler.bind(this,index)}
              key={person.id}
              changed={(event) => this.changedNameHandler(event,person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red; 
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2)
      assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1)
      assignedClasses.push(classes.bold);
    return (
      <div className={classes.App}>
        <h1>React Course</h1>
        <p className={assignedClasses.join(' ')}>This is working!</p>
        <button 
            className={btnClass}
            onClick={this.tooglePersonHandler}>Toggle Person</button>
        {person}
      </div>
    );
  }
}

export default App;
