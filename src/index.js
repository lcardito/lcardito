import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import ReactGA from 'react-ga';


if (process.env.NODE_ENV !== 'development') {
    ReactGA.initialize('UA-110494248-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
