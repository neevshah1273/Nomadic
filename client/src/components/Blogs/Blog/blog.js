import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import moment from 'moment';


import { Link, useLocation, useParams } from 'react-router-dom';



const Blog = () => {
    const {id} = useParams();
    const Blogs = useSelector((state)=> state.blogs);
    const blog = Blogs.find(blog => blog._id==id)

    const CurrentUser = JSON.parse(localStorage.getItem('profile'));
    //console.log(blog);

    const BBody = blog.blogBody;

    return(
    
        <div key={blog._id} >
                
            <div className="Title row d-flex justify-content-center">
                {blog.title}
            </div>


            <div className="row d-flex justify-content-center">
                {moment(blog.createdAt).fromNow()}
            </div>

            
            <div className="row">
                <div className="col-lg-3">
                    <div className="Creator row">

                        <Link
                            to={`/users/${blog.creator}`}
                        >
                            Created By {blog.creator}
                        </Link>
                        
                        
                    </div>
                </div>
                <div className="col-lg-9">


                    {
                        BBody.map((Body)=>(
                            //console.log(Body.IsImage)
                            Body.IsImage?(
                                <div>
                                    <CardMedia
                                        src={Body.content}
                                    />
                                </div>
                            ):(
                                <div>
                                     <Typography
                                     display="block"
                                     paragraph="true"
                                     >
                                         {Body.content}
                                    </Typography>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </div>    
    )
}

export default Blog;