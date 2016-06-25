import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'
import { Root, Summary, Inventory, Modifier } from 'containers';


export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={Summary} />
                <Route path="inventory" component={Inventory} />
                <Route path="modifier" component={Modifier} />
                <Redirect from="*" to="/" />
            </Route>
        </Router>
    )
}