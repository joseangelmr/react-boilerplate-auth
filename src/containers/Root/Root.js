import React, { Component } from 'react';
import { Router, Route, IndexRoute, } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import {
    App,
    NoMatch,
} from './../../components'
import {
    HomePageContainer
} from './../../containers'
import { client } from './../../graphql/config'

class Root extends Component {
    render() {

        const { history, store } = this.props;

        return (
            <ApolloProvider store={store} client={client}>
                <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
                    <Route path="/" component={App}>
                        <IndexRoute component={HomePageContainer} />
                        <Route path="*" component={NoMatch} />
                    </Route>
                </Router>
            </ApolloProvider>
        );
    }
}

export default Root;
