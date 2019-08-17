import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import appReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
