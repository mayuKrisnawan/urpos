import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';

import store from './store';

ReactDOM.render(<Provider store={store}>
  <AppContainer/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
