import React, { Component } from 'react';
import { Footer, Header, Main } from 'components';
import './Root.scss';

export default class Root extends Component {
    render() {
        return (
            <div className="root">
                <Header />
                <Main>{this.props.children}</Main>
                <Footer />
            </div>
        );
    }
}