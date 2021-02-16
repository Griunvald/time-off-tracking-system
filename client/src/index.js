import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import firebase from './config/firebase';

import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.querySelector('#root')
    );
  } else {
    // No user is signed in.
  }
});
