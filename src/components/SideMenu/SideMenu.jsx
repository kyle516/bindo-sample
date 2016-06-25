import React, { Component } from 'react';
import { sidemenu } from 'datas';
import { Link } from 'react-router';
import cn from 'classnames';
import './SideMenu.scss';


export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {};
    }
    
    toggle(id) {
        this.setState( state => {
            return {
                [id]: !state[id]
            }
        });
    }

    get sidemenu() {
        return sidemenu.map( (parent, i) =>
            <dl key={i} className="sidemenu__list">
                <dt onClick={this.toggle.bind(null, parent.id)}>{parent.title}</dt>
                {
                    parent.children.map( (child, i2) =>
                        <dd key={i2} className={ cn({'is-hidden': this.state[parent.id]}) }><Link to={child.to}>{child.title}</Link></dd>
                    )
                }
            </dl>
        );
    }

    render() {
        return (
            <nav className="sidemenu">
                {this.sidemenu}
            </nav>
        );
    }
}