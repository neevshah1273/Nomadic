import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Container} from '@material-ui/core';
import Home from './components/Home/Home';
import Feed from './components/Feed/Feed.js';

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Feed" exact component={Feed} />
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;