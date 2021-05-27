import React, {useState} from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {createBlog} from '../../actions/blogs';


import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const BlogEditor = () =>{

    const CurrentUser = JSON.parse(localStorage.getItem('profile'));
    //console.log(CurrentUser.result);
    const classes = useStyles();
    const dispatch = useDispatch();

    const [inputFields,SetInputFields] = useState([
        {IsImage: false, content: ''},
    ]);

    const [blogData,setBlogData] = useState({
        title: '',
        creator: CurrentUser.result.username,
        tags : '',
        blogBody : inputFields,        
        selectedFile : '',
        location : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(blogData);
        dispatch(createBlog(blogData));
    }

    



    const handleIpChange = (event,index) => {
        const values = [...inputFields];
        values[index][event.target.name]= event.target.value;
        SetInputFields(values);
        setBlogData({...blogData,blogBody: inputFields});
    }

    const handleIpIChange = (base64,index) => {
        const values = [...inputFields];
        values[index]['content']= base64;
        SetInputFields(values);
        setBlogData({...blogData,blogBody: inputFields});
    }

    const handleAddText = () => {
        SetInputFields([...inputFields, {IsImage: false, content: ''}]);
        setBlogData({...blogData,blogBody: inputFields});
    }

    const handleAddImage = () => {
        SetInputFields([...inputFields, {IsImage: true, content: ''}]);
        setBlogData({...blogData,blogBody: inputFields});
    }

    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        SetInputFields(values);
        setBlogData({...blogData,blogBody: inputFields});
    }

    return(
    
        <div >
            blogEditor
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6">Blog Editor</Typography>
                    <TextField 
                        name="title"
                        variant="outlined"
                        fullWidth
                        placeholder="title"
                        value={blogData.title}
                        onChange={(e) => setBlogData({...blogData,title: e.target.value})}
                    />

                    {
                        inputFields.map((inputField,index)=>(
                            
                            <div key={index}>
                                {
                                    inputField.IsImage?(
                                        <div className={classes.fileInput}>
                                            <FileBase
                                                type="file"
                                                multiple={false}
                                                onDone={(base64)=>handleIpIChange(base64,index)}
                                            />
                                        </div>
                                    ):(

                                        <TextField 
                                            name="content"
                                            variant="outlined"
                                            fullWidth
                                            placeholder="Add Text"
                                            value={inputField.content}
                                            onChange={(event)=>{
                                                //console.log(event.target.name);
                                                //console.log(index);
                                                //console.log(inputFields[index][event.target.name]);
                                                handleIpChange(event,index);
                                                //SetInputFields({...inputFields,inputFields[index][event.target.name]: event.target.value });
                                            }}
                                            //onChange={(e) => setBlogData({...blogData,blogBody: e.target.value})}
                                        />
                                        
                                    )
                                }

                                <IconButton
                                    onClick={() => handleAddText()}
                                >
                                    <AddIcon/>
                                    Add Text
                                </IconButton>
                                <IconButton
                                    onClick={() => handleAddImage()}
                                >
                                    <AddIcon/>
                                    Add Image
                                </IconButton>
                                <IconButton
                                    onClick = {() => handleRemoveField(index)}
                                >
                                    <RemoveIcon/>
                                </IconButton>
                            </div>
                        ))
                    }
                    <div>
                        Add Text

                    </div>
                    <div >
                        Add Image
                    </div>
                    <TextField 
                        name="location"
                        variant="outlined"
                        fullWidth
                        value={blogData.location}
                        placeholder="location"
                        onChange={(e) => setBlogData({...blogData,location: e.target.value})}
                    />
                    <TextField 
                        name="tags"
                        variant="outlined"
                        fullWidth
                        placeholder="tags"
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