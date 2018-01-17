import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import RoutingStore from './store/RoutingStore';

ReactDOM.render(<App routingStore={new RoutingStore()} />, document.getElementById('root'));
registerServiceWorker();
