import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history/createBrowserHistory';
import rootReducer from './reducers';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import { fetchAuthenticated } from './actions/account';
import './index.css';

const history = createBrowserHistory;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// const AuthRoute = (props) => {
//   if (!store.getState().account.loggedIn) {
//     return <Redirect to={{ pathname: '/' }} />;
//   }
//   const { component, path } = props;

//   return <Route path={path} component={component} />;
// };

// store.dispatch(fetchAuthenticated()).then(() => {
render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route path="/account-dragons" element={<AccountDragons />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// });
