import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

//Components
import Books from './components/books/Books';
import Home from './components/home/Home';
import Book from './components/book/Book';

const Routes = props => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/books" component={Books}/>
            <Route exact path="/book/:id" component={Book}/>
        </Switch>
    );
};

export default Routes;