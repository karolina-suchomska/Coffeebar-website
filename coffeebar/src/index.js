import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/Index';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
