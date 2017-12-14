import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
//import App from './App';
import RouterContainer from './router/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterContainer/>, document.getElementById('root'));
registerServiceWorker();
