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

        history.push('/');
        
        dispatch({ type: 'LOGOUT' });



        setUser(null);
    }

    const MyProfile = () => {
        history.push(`/users/${user.username}`);
    }

    useEffect(() => {

        dispatch(getBlogs());
    }, [dispatch]);

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')).result);
    }, [location]);

    return (
        <div>
            <div className="d-flex justify-content-between m-3 row ">
                <div className="col c1">
                    <Link to="/NewBlog" className="btn btn-lg btn-primary">Create New Blog</Link>
                </div>
                <div className="col c2">
                    <button onClick={LogOut} className="btn btn-lg btn-primary">Log Out</button>
                    <button onClick={MyProfile} className="btn btn-lg btn-primary x1">My Profile</button>
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
