import React from 'react';

class HomePage extends React.Component {
    render() {
        return <h1>Hello there, {this.props.firstName}!</h1>
    }
}

export default HomePage;