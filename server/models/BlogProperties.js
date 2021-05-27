import mongoose from 'mongoose';


const Blogbody = mongoose.Schema({
    IsImage : {
        type : Boolean,
        default : false,
    },
    content : String,
});

const blogSchema = mongoose.Schema({
    title : String,
    creator : String,
    tags : [String],
    selectedFile : String,
    upvoteCount : {
        type : Number,
        default : 0,
    },
    createdAt :{
        type : Date,
        default : new Date(),
    },
    location : String,
    blogBody : [Blogbody],
    
});

const BlogProperties = mongoose.model('BlogProperties',blogSchema);

export default BlogProperties;