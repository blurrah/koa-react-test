import React, { PropTypes } from 'react'

if(window) {
    require('./Header.css');
}

export default class Header extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <section className="header">
                <h1 className="header--heading">{this.props.title}</h1>
                <p className="header--text">En een stukje <span className="header--text__bold">test</span> tekst</p>
            </section>
        )
    }
}
