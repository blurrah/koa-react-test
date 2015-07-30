import React from 'react';
import Header from './Components/Header';

export default class Application extends React.Component {
    state = {
        title: 'Hallo'
    }

    render() {
        return (
            <Header title={this.state.title} />
        );
    }
};
