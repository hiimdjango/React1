import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
import withClass from '../hoc/withClass';

class App extends Component {
  
  state = {
    persons: [
      {id:'0' ,name:"Ahmed", age:23},
      {id:'1' ,name:"Omar",age:28},
      {id:'2' ,name:"Aymen",age:29}
    ],
    personShow : false
  }
  //Remove an element from the state.persons using it's index
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  //update the person's name using the id and the input data
  changedNameHandler = ( event,id ) => {
    //map trough the persons table till Id matches
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //create a new person object spreading the object in the state and update the name with the input value
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value; 
    //spread the persons array and update it with the new person object updated
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    //update the state.persons using the updated array
    this.setState({persons:persons });
  }

  //Show / Unshow the list of persons
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
      <>
        <Cockpit
          title = {this.props.title}
          persons={this.state.persons}
          personShow={this.state.personShow}
          toogled={this.tooglePersonHandler} />
        {persons}
      </>
    );
  }
}

export default withClass(App,classes.App);
