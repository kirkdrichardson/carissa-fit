import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

import routingStore from './store/RoutingStore';

ReactDOM.render(<Root routingStore={routingStore} />, document.getElementById('root'));
registerServiceWorker();
