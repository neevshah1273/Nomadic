import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import {useSelector,useDispatch,} from 'react-redux';
import {getUsers} from '../../actions/auth.js';
import {useLocation} from 'react-router-dom';
import { Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

const UserProfile = () => {
    let {username} = useParams();

    const Blogs = useSelector((state)=> state.blogs);
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();
    //const Blogs = useSelector((state)=> state.blogs);
    
    //console.log(usernm);
    // useEffect(() => {
    //     dispatch(getUsers(username));
    // }, [dispatch])

    // const Users = useSelector((state)=> state.users);
    // console.log(Users);


    return (
        <div>
            <h3>UserName: {username}</h3>
            {/* {Users?(<div>
                {Users.result.email}
            </div>):(<div></div>)}  */}
            {
                !Blogs.length ? <CircularProgress/> : (
                    Blogs.map((blog)=>(
                        blog.creator === username ?
                        <Grid key={blog._id} item >
                            <Card className={classes.root}>
                              <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                <Link
                                    to={{
                                        pathname : `/blogs/${blog._id}`
                                    }}
                                >
                                    {blog.title}
                                </Link>
                                
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            <Link
                            to={`/users/${blog.creator}`}
                            >
                                Created By {blog.creator}
                            </Link>
                            </Typography>
                            </CardContent>
                            
                        </div>
                        {blog.selectedFile?(
                        <CardMedia
                            className={classes.cover}
                            image={blog.selectedFile}
                            title={blog.title}
                        />
                        ):(
                            <div>
                                nullImage
                            </div>
                        )}

                        </Card>
                    
                    </Grid> : (
                            <div> </div>
                        )
                    ))
                )
            }            


             
        </div>
    )
}

export default UserProfile;
