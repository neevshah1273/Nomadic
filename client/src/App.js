import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Container} from '@material-ui/core';
import Home from './components/Home/Home';
import Feed from './components/Feed/Feed.js';
import User from './components/UserProfile/UserProfile.js';
import Blog from './components/Blogs/Blog/blog.js';
import BlogEditor from './components/BlogEditor/blogEditor.js';

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Feed" exact component={Feed} />
                <Route path="/users/:username" component={User}/>
                <Route path="/blogs/:id" component={Blog}/>
                <Route path="/NewBlog" component={BlogEditor}/>
            </Switch>
        </Container>
    </BrowserRouter>
);

export default App;