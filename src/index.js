import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/Home/index';
import './assets/styles/scss/application.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { rootStore } from './stores/store/index';

ReactDOM.render(
  <Provider store={rootStore}>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode>, */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
