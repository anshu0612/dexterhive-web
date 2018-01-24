import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';

import GroupsContainer from '../containers/GroupsContainer/GroupsContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import MainPageContainer from '../containers/MainPageContainer/MainPageContainer';
import PageNotFound from '../containers/PageNotFound/PageNotFound';
import configureStore from '../store/configureStore';

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

let initialStoreData = {};

try {
    initialStoreData = initData;
} catch (error) {
    // Catch if initData is not defined
    console.warn('No initial data found, moving on!');
}

const store = configureStore();

/* History for navigation purpose */
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const route = (
    <Provider store={store}>
      <Router history={appHistory}>
        <Route path='/' component={MainPageContainer}/>
        <Route path='/groups' component={GroupsContainer}/>
        <Route path='/dashboard' component={MainPageContainer}/>
        <Route path='/profile' component={ProfileContainer}/>
        <Route path='*' component={PageNotFound} />
      </Router>
    </Provider>
)

ReactDOM.render(route, document.getElementById('root'));


export function getState() {
    return store.getState();
}

export function dispatchAction(action) {
    store.dispatch(action);
}
