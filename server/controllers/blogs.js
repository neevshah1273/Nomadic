import BlogProperties from '../models/BlogProperties.js';

export const getBlogs = async (req,res)=>{
    try {
        const blogProperties = await BlogProperties.find();

        console.log(blogProperties);

        res.status(200).json(blogProperties);

    } catch (error) {
        res.status(404).json({message : err.message});
    }
}

export const createBlog = async (req,res)=>{

    const blog = req.body;

    const newBlog = new BlogProperties(blog);

    try {
        
        await newBlog.save();

        res.status(201).json(newBlog);

    } catch (error) {

        res.status(409).json({message : error.message});
    }
}