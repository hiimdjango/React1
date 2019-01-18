import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  
  state = {
    persons: [
      {id:'0' ,name:"Ahmed", age:23},
      {id:'1' ,name:"Omar",age:28},
      {id:'2' ,name:"Aymen",age:29}
    ],
    personShow : false
  }
  /*nameChangedHandler = (newName) => {
    this.setState(
      {
        persons: [
          {name:newName, age:23},
          {name:"Omar",age:28},
          {name:"Aymen",age:29}
        ]
      }
    )
  }*/
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
    // Styles for the button
    const style = {
      backgroundColor:'green',
      color: 'white',
      boxShadow:'3px solid #ccc',
      padding:'8px',
      cursor:'pointer',
      ':hover' : {
        backgroundColor:'lightgreen',
        color: 'black'
      }
    }
    
    let person = null;
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
      )
      //Set the button style when clicked
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2)
      classes.push('red');
    if (this.state.persons.length <= 1)
      classes.push('bold');
    return (
      <StyleRoot>
      <div className="App">
        <h1>React Course</h1>
        <p className={classes.join(' ')}>This is working!</p>
        <button onClick={this.tooglePersonHandler}
                style={style}>Toggle Person</button>
        {person}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
