import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes  />, document.getElementById('root'));
registerServiceWorker();
