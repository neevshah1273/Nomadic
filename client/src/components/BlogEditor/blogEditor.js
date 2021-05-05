import React, {useState} from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {createBlog} from '../../actions/blogs';


const BlogEditor = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(blogData);
        dispatch(createBlog(blogData));
    }

    const [blogData,setBlogData] = useState({
        title: '',
        creator: '',
        tags : '',
        blogBody : '',        
        selectedFile : '',
        location : ''
    });

    return(
    
        <div >
            blogEditor
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6">Blog Editor</Typography>
                    <TextField 
                        name="creator"
                        variant="outlined"
                        fullWidth
                        value={blogData.creator}
                        onChange={(e) => setBlogData({...blogData,creator: e.target.value})}
                    />
                    <TextField 
                        name="title"
                        variant="outlined"
                        fullWidth
                        value={blogData.title}
                        onChange={(e) => setBlogData({...blogData,title: e.target.value})}
                    />
                    <TextField 
                        name="blogBody"
                        variant="outlined"
                        fullWidth
                        value={blogData.blogBody}
                        onChange={(e) => setBlogData({...blogData,blogBody: e.target.value})}
                    />
                    <TextField 
                        name="location"
                        variant="outlined"
                        fullWidth
                        value={blogData.location}
                        onChange={(e) => setBlogData({...blogData,location: e.target.value})}
                    />
                    <TextField 
                        name="tags"
                        variant="outlined"
                        fullWidth
                        value={blogData.tags}
                        onChange={(e) => setBlogData({...blogData,tags: e.target.value.split(',')})}
                    />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={(base64)=>{setBlogData({...blogData,selectedFile: base64})}}
                        
                        />
                    </div>
                    <Button
                        className={classes.buttonsubmit}
                        variant="container"
                        color="primary"
                        size="large"
                        type="submit"
                        fullWidth
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
        </div>

    )

}

export default BlogEditor;