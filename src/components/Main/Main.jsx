import React, { Component } from 'react';
import { SideMenu } from 'components'
import './Main.scss';


export default class Main extends Component {
    render() {
        return (
            <div className="main row">
                <div className="column-left">
                    <SideMenu />
                </div>
                <div className="column-right">
                    {this.props.children}
                </div>
            </div>
        );
    }
}