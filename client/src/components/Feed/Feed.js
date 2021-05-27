import React, {useEffect, useState} from 'react';
import {useHistory, useLocation, Link} from 'react-router-dom';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import { getBlogs } from '../../actions/blogs';
import Blogs from '../Blogs/Blogs.js';
import BlogEditor from '../BlogEditor/BlogEditor.js';
import { Button } from '@material-ui/core';
import './Feed.css';


const Feed = () => {

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const LogOut = () =>{
        dispatch({type: 'LOGOUT'});

        history.push('/');

        setUser(null);
    }

    useEffect(()=>{
        
        dispatch(getBlogs());
    },[dispatch]);

    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);

    return (
        <div>
            <div>
                <div>
                    <Button onClick={LogOut}>LogOut</Button>
                </div>
                <div>
                <Link to="/NewBlog" className="btn btn-primary">Create New Blog</Link>
                </div>   
            </div>
            
            {/*<div>
                {user?.result.name}
            </div>*/}
            <Blogs/> 
            {/* <BlogEditor/>*/}
            
        </div>
    )
}

export default Feed
