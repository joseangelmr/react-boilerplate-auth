import ApolloClient, { createNetworkInterface } from 'apollo-client';

const token = localStorage.getItem('token');
const networkInterface = createNetworkInterface({ uri: 'http://localhost:4000/graphql' });

networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};
        }
        req.options.headers.token = token ? token : null;
        next();
    }
}]);

export const client = new ApolloClient({
    networkInterface
});

