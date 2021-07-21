import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../../actions/blogs';
import Blogs from '../Blogs/blogs.js';
import BlogEditor from '../BlogEditor/blogEditor.js';
import { Button } from '@material-ui/core';
import './Feed.css';


const Feed = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const LogOut = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    }

    useEffect(() => {

        dispatch(getBlogs());
    }, [dispatch]);

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <div>
            <div className="d-flex justify-content-between m-3 ">
                <div className="">
                    <Link to="/NewBlog" className="btn btn-lg btn-primary">Create New Blog</Link>
                </div>
                <div>
                    <button onClick={LogOut} className="btn btn-lg btn-primary">Log Out</button>
                </div>
            </div>
            {/*<div>
                {user?.result.name}
            </div>*/}
            <Blogs />
            {/* <BlogEditor/>*/}
        </div>
    )
}

export default Feed
