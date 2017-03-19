import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './appReducer'
import { client } from './../../graphql/config/'

const rootReducer = combineReducers({
    apollo: client.reducer(),
    routing: routerReducer,
    app: appReducer,
});

export default rootReducer;