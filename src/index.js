import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const pages = [
    {
      name : 'Home',
    },    
    {
      name : 'Service',
    },
    {
      name : 'Features',
    },
    {
      name : 'Pricing',
    },
    {
      name : 'Team',
    },
    {
      name : 'FAQ',
    },
    {
      name : 'Blog',
    },
    {
      name : 'Contact',
    },
  ];

ReactDOM.render(<App pages={pages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
