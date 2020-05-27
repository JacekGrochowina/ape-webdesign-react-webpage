import React from 'react';
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import Root from './views/Root';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Root />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);