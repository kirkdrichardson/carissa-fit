import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import routingStore from './store/RoutingStore';

ReactDOM.render(<App routingStore={routingStore} />, document.getElementById('root'));

// TODO - switch to https
// registerServiceWorker();
