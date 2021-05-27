import BlogProperties from '../models/BlogProperties.js';

export const getBlogs = async (req,res)=>{
    try {
        const blogProperties = await BlogProperties.find();

        console.log(blogProperties);

        res.status(200).json(blogProperties);

    } catch (error) {
        //console.log('ccccc');
        res.status(404).json({message : error.message});
    }
}

export const createBlog = async (req,res)=>{

    const blog = req.body;

    const newBlog = new BlogProperties(blog);

    //console.log(blog.creator);

    try {
        
        await newBlog.save();

        res.status(201).json(newBlog);
        console.log('sucess');
    } catch (error) {
        //console.log(error);
        res.status(409).json({message : error.message});
    }
}