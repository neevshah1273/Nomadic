import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
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

    const LogOut = () =>{
        dispatch({type: 'LOGOUT'});

        history.push('/');

        setUser(null);
    }

    useEffect(()=>{
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
        dispatch(getBlogs());
    },[dispatch]);

    return (
        <div>
            <Button onClick={LogOut}>LogOut</Button>
            <Blogs/>
            <BlogEditor/>
        </div>
    )
}

export default Feed
