import React, { Component } from 'react';
import './Header.scss';


export default class Header extends Component {
    render() {
        return (
            <header className="header row">
                <div className="column-left">
                    Bindo Dashboard
                </div>
                <div className="column-right"></div>
            </header>
        );
    }
}