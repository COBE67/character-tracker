import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import Routes from './config/Routes'
import Nav from './config/Nav'

const client = new ApolloClient({
    uri: "https://us1.prisma.sh/wes-cutting-92f43f/api/dev"
});

const App = () => (
    <ApolloProvider client={client}>
        <Router>
            <Fragment>
                <Nav/>
                <Routes/>
            </Fragment>
        </Router>
    </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
