import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './sideNav/sideNav';

export default class Header extends Component {

    state = {
        showNav: false
    }

    render() {
        return (
            <header>
                <div className="open_nav">
                    <FontAwesome name="bars"
                        style={{
                            color: 'white',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <Nav showNav={this.state.showNav} />
                <Link to="/" className="logo">
                    The Book Shelf
                </Link>
            </header>
        )
    }
}
