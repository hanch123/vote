import React from 'react';
import {
  Router, Route, IndexRoute, browserHistory,
  useRouterHistory,
} from 'react-router';
import {createHistory} from 'history';
import App from './App';

import Proxy from './proxy';
import {Provider} from 'react-redux';
import store from './store';

import Guide from './components/Guide/Guide';
import VoteList from './components/VoteList/VoteList';

const relativeHistory = useRouterHistory(createHistory)({
  basename: '/vote',
});

const isDev = process.env.NODE_ENV === 'development';
const history = isDev ? browserHistory : relativeHistory;

// const history = createBrowserHistory();
const Routes = (props) => (
  <Provider store={store}>
    <Router {...props} history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Guide}/>
        <Route path="/voteList" component={VoteList}/>
        <Route path="proxy" component={Proxy}/>
      </Route>
    </Router>
  </Provider>
);
export default Routes;