import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import Blog from './Blog/blog.js';
import useStyles from './styles';
import {useSelector} from 'react-redux';

const Blogs = () =>{

    const Blogs = useSelector((state)=> state.blogs);
    const classes = useStyles();
    //console.log(Blogs);

    return(
    
        !Blogs.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    Blogs.map((blog)=>{
                        <Grid key={blog._id} item xs={12} sm={6}>
                            <Blog blog={blog}/>
                        </Grid>
                    })

                }
            </Grid>
        )

    );

}

export default Blogs;