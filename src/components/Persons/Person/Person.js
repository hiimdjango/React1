import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    };

    focusInput() {
        this.textInput.current.focus();
    }



    render() {
        return (
            <>
                <p onClick={this.props.click}>My name is {this.props.name}, I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    ref = {this.textInput}></input>
            </>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person,classes.Person);