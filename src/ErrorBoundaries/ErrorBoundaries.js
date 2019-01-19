import React, { Component } from 'react';

class ErrorBoundaries extends Component {
    state = {
        hasError:false,
        info:''  
    }
    
    componentDidCatch = (error, info) => {
        this.setState({hasError:true});
        this.setState({info:error});
    }

    render() {
        if (this.state.hasError === true)
        return <h1>Something Went Wrong !</h1>
        else return this.props.children;
    }
}

export default ErrorBoundaries;