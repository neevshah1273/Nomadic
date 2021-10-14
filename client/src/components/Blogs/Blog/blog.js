import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment';


import { Link, useLocation, useParams } from 'react-router-dom';
import './blog.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    const { id } = useParams();
    console.log(id);


    const Blogs = useSelector((state) => state.blogs);


    console.log(Blogs);
    const [blog, setblog] = useState(Blogs.find(blog => blog._id == id));


    const updateblog = () => {
        setblog(Blogs.find(blog => blog._id == id));
    }


    useEffect(() => {
        updateblog();
    }, [Blogs]);
    //const blog = Blogs.find(blog => blog._id==id)

    const CurrentUser = JSON.parse(localStorage.getItem('profile'));
    //console.log(blog);
    const [BBody, setBBody] = useState(null);

    const updateBBody = () => {
        console.log(blog);
        setBBody(blog.blogBody);
    }

    useEffect(() => {
        updateBBody();
    }, [blog]);
    //const BBody = blog.blogBody;

    return (

        <div className="x">
            {
                (blog && BBody) ?
                    (
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
                                        <div className="row">
                                            <div className="col">
                                                <button className="btn btn-lg btn-primary ">
                                                    <FontAwesomeIcon icon={faCoffee}/> Follow
                                                </button>
                                            </div>
                                            &nbsp;
                                            <div className="row">
                                                <div>
                                                <button className="btn btn-lg btn-primary ">Up Vote</button>
                                                </div>
                                                &nbsp;
                                                <div>
                                                  <button className="btn btn-lg btn-primary">Delete</button>
                                               </div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">


                                    {
                                        BBody.map((Body) => (
                                            //console.log(Body.IsImage)
                                            Body.IsImage ? (
                                                <div>
                                                    <CardMedia
                                                        src={Body.content}
                                                    />
                                                    {Body.content}
                                                </div>
                                            ) : (
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

                    ) :
                    (<div>
                        Wait
                    </div>
                    )
            }
        </div>
    )
}

export default Blog;