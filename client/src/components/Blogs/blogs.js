import React from 'react';
import Blog from './Blog/blog.js';
import {useSelector} from 'react-redux';

const Blogs = () =>{

    const Blogs = useSelector((state)=> state.blogs);

    console.log(Blogs);

    return(
    
        <div >
            Blogs
            <Blog/>
        </div>

    )

}

export default Blogs;