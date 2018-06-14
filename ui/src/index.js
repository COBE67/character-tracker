import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './index.css';
import CharactersView from './characters/CharactersView'
import CreateCharacter from './characters/CreateCharacter'

const client = new ApolloClient({
    uri: "https://us1.prisma.sh/wes-cutting-92f43f/api/dev"
});

const App = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>🚀 Character Tracking System</h2>
            <CreateCharacter/>
            <hr/>
            <CharactersView/>
        </div>
    </ApolloProvider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
