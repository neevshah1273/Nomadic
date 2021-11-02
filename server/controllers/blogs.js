//import { Mongoose } from 'mongoose';
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

    console.log(newBlog);

    try {
        
        await newBlog.save();

        console.log(newBlog);
        console.log("err");
        res.status(201).json(newBlog);
        console.log('sucess');
    } catch (error) {
        //console.log(error);
        res.status(409).json({message : error.message});
    }
}

export const deleteBlog = async(req,res)=>{
    
    const id = req.body;
    //const id = req.body;

    // if(!Mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).send("No blogs with that id");
    // }

    await BlogProperties.findByIdAndRemove(id);

    res.status(200).json({ message: "Blog deleted successfully" });
}