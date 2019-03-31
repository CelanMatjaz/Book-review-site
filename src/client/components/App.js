import React, { Component } from 'react';
import Routes from '../Routes';
import { ApolloProvider } from "react-apollo";
import client from '../apollo-client';

//Components
import Navbar from './layout/Navbar';

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <>                    
                    <a id="top" href="#nav">Top</a>
                    <Navbar/>
                    <main className="container">
                        <Routes/> 
                    </main>
                </>
            </ApolloProvider>            
        );
    }
}

export default App;