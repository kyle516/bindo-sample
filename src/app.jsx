import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routes from 'configs/Routes.jsx';

render(
    <Routes />,
    document.getElementById('app')
);