import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import { getBlogs } from '../../actions/blogs';
import Blogs from '../Blogs/Blogs';
import BlogEditor from '../BlogEditor/BlogEditor.js';
import { Button } from '@material-ui/core';


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
            <Button onClick={LogOut}>LogOut</Button>
            <div>
                {user?.result.name}
            </div>
            <Blogs/>
            <BlogEditor/>
        </div>
    )
}

export default Feed
