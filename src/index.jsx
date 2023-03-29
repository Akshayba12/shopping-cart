import React from 'react';

import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './app';
import { AuthProvider } from './context/AuthContext';
import { Errorprovider } from './context/errorContext';
import { Loadingprovider } from './context/loadingContext';
import './style.scss';
import rootReducer from './Reducer';

// import TodoForm from './todoForm';

const container = document.getElementById('root');

const root = createRoot(container);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
);

root.render(
  <Provider store={store}>
    <AuthProvider>
      <Loadingprovider>
        <Errorprovider>
          <App />
        </Errorprovider>
      </Loadingprovider>
      ,
    </AuthProvider>
    ,
  </Provider>,

);
