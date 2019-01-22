import React, { Component } from 'react';
import Person from './Person/Person';

//Map through the state.persons in App.js and create Person components.
class Persons extends Component {
    constructor(props) {
        super(props);
        this.lastPerson = React.createRef();
    }
    componentDidMount() {
        this.lastPerson.current.focusInput();
    }

    render() {
        return this.props.persons.map((person,index) => {
                return <Person 
                name={person.name}
                age={person.age} 
                click={this.props.clicked.bind(this,index)}
                ref={this.lastPerson}
                key={person.id}
                changed={(event) => this.props.changed(event,person.id)} />
            })
    }
}  

  export default Persons;