import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';

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
    let persons = null;
    if (this.state.personShow === true) {
      //Rendering multiple Person component using .map()
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changedNameHandler} />
        </div>
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          title = {this.props.title}
          persons={this.state.persons}
          personShow={this.state.personShow}
          toogled={this.tooglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
