import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router';
import {useSelector,useDispatch,} from 'react-redux';
import {getUsers} from '../../actions/auth.js';
import {useLocation} from 'react-router-dom';

const UserProfile = () => {
    const Blogs = useSelector((state)=> state.blogs);
    const dispatch = useDispatch();
    let {username} = useParams();
    const location = useLocation();
    
    //console.log(usernm);
    useEffect(() => {
        dispatch(getUsers(username));
    }, [dispatch])

    const Users = useSelector((state)=> state.users);
    console.log(Users);


    return (
        <div>
            <h3>UserName: {username}</h3>
            {Users?(<div>
                {Users.result.email}
            </div>):(<div></div>)} 
             


             
        </div>
    )
}

export default UserProfile;
