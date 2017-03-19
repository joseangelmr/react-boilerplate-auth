import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import createLogger from 'redux-logger';

import * as actionCreators from './../actions'
import rootReducer from './../reducers/';
import { client } from './../../graphql/config'

const logger = createLogger({ collapsed: false });

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(thunk, logger, client.middleware()),
        devToolsEnhancer({
            realtime: true, actionCreators
        })
    ));
    if (module.hot) {
        module.hot.accept('./../reducers/', () => {
            const nextRootReducer = require('./../reducers/').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}