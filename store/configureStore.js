
// import {compose, createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers'
// import thunkMiddleware from 'redux-thunk';
//
// const createAppStore = compose(
//         applyMiddleware(thunkMiddleware),
//         window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);
//
// export default function configureStore(initialState) {
//     const store = createAppStore(rootReducer, initialState);
//     if (module.hot) {
//         // Enable Webpack hot module replacement for reducers
//         module.hot.accept('../reducers', () => {
//             const nextReducer = require('../reducers').default
//             store.replaceReducer(nextReducer)
//     })
//     }
//
//     return store
// }

import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const createAppStore = compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
    const store = createAppStore(rootReducer, initialState);
    return store;
}
