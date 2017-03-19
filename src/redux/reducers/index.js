import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './appReducer'
import { reducer as formReducer } from 'redux-form';
import { client } from './../../graphql/config/'

const rootReducer = combineReducers({
    apollo: client.reducer(),
    routing: routerReducer,
    app: appReducer,
    form: formReducer,
});

export default rootReducer;