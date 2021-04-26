import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';


import { getBlogs } from './actions/blogs';
import BlogEditor from './components/BlogEditor/blogEditor.js';
import Blogs from './components/Blogs/Blogs.js';

const App = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBlogs());
    },[dispatch]);

    return(
        <div>
            <h1>
                App
                <BlogEditor/>
                <Blogs/>
            </h1>
        </div>
    )
}

export default App;