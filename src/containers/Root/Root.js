import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, } from 'react-router';
import {
    App,
    NoMatch,
} from './../../components'
import {
    HomePageContainer
} from './../../containers'

class Root extends Component {
    render() {

        const { history, store } = this.props;

        return (
            <Provider store={store}>
                <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
                    <Route path="/" component={App}>
                        <IndexRoute component={HomePageContainer} />
                        <Route path="*" component={NoMatch} />
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default Root;
