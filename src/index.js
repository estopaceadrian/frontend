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
import rootReducer from './reducers';
import history from './history';
import Root from './components/Root';
import AccountDragons from './components/AccountDragons';
import { fetchAuthenticated } from './actions/account';
import { fetchPublicDragons } from './actions/account';
import './index.css';
import PublicDragons from './components/PublicDragons';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// const AuthRoute = (props) => {
//   if (!store.getState().account.loggedIn) {
//     return <Redirect to={{ pathname: '/' }} />;
//   }
//   const { component, path } = props;

//   return <Route path={path} component={component} />;
// };

// store.dispatch(fetchPublicDragons());

// store.dispatch(fetchAuthenticated()).then(() => {
render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route path="/account-dragons" element={<AccountDragons />} />
        <Route path="/public-dragons" element={<PublicDragons />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
// });
