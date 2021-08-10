import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createBlog } from '../../actions/blogs';


import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const BlogEditor = () => {
    const history = useHistory();

    const CurrentUser = JSON.parse(localStorage.getItem('profile'));
    //console.log(CurrentUser.result);
    const classes = useStyles();
    const dispatch = useDispatch();

    const [inputFields, SetInputFields] = useState([
        { IsImage: false, content: '' },
    ]);

    const [blogData, setBlogData] = useState({
        title: '',
        creator: CurrentUser.result.username || CurrentUser.result.getName(),
        tags: '',
        blogBody: inputFields,
        selectedFile: '',
        location: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(blogData);
        dispatch(createBlog(blogData));
        history.push('/Feed');
    }





    const handleIpChange = (event, index) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        SetInputFields(values);
        setBlogData({ ...blogData, blogBody: inputFields });
    }

    const handleIpIChange = (base64, index) => {
        const values = [...inputFields];
        values[index]['content'] = base64;
        SetInputFields(values);
        setBlogData({ ...blogData, blogBody: inputFields });
    }

    const handleAddText = () => {
        SetInputFields([...inputFields, { IsImage: false, content: '' }]);
        setBlogData({ ...blogData, blogBody: inputFields });
    }

    const handleAddImage = () => {
        SetInputFields([...inputFields, { IsImage: true, content: '' }]);
        setBlogData({ ...blogData, blogBody: inputFields });
    }

    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        SetInputFields(values);
        setBlogData({ ...blogData, blogBody: inputFields });
    }

    return (

        <div >
            <h1 className={classes.start}><p className="my-3">Blog Editor</p></h1>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.title}>
                        <TextField
                            name="title"
                            variant="outlined"
                            fullWidth
                            placeholder="Title"
                            value={blogData.title}
                            onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
                        />
                    </div>
                    {
                        inputFields.map((inputField, index) => (

                            <div key={index}>
                                {
                                    inputField.IsImage ? (
                                        <div className={classes.fileInput}>
                                            <FileBase
                                                type="file"
                                                multiple={false}
                                                onDone={(base64) => handleIpIChange(base64, index)}
                                            />
                                        </div>
                                    ) : (
                                        <div className={classes.add_txt}>
                                            <TextField
                                                name="content"
                                                variant="outlined"
                                                fullWidth
                                                placeholder="Add Text"
                                                value={inputField.content}
                                                onChange={(event) => {
                                                    //console.log(event.target.name);
                                                    //console.log(index);
                                                    //console.log(inputFields[index][event.target.name]);
                                                    handleIpChange(event, index);
                                                    //SetInputFields({...inputFields,inputFields[index][event.target.name]: event.target.value });
                                                }}
                                            //onChange={(e) => setBlogData({...blogData,blogBody: e.target.value})}
                                            />
                                        </div>

                                    )
                                }
                                <div className={classes.btn_posi}>
                                    <IconButton className={classes.btn}
                                        onClick={() => handleAddText()}
                                    >
                                        <AddIcon />
                                        Add Text
                                    </IconButton>
                                    <IconButton className={classes.btn}
                                        onClick={() => handleAddImage()}
                                    >
                                        <AddIcon />
                                        Add Image
                                    </IconButton>
                                    <IconButton className={classes.btn}
                                        onClick={() => handleRemoveField(index)}
                                    >
                                        <RemoveIcon />
                                        Remove
                                    </IconButton>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div>
                        Add Text

                    </div>
                    <div >
                        Add Image
                    </div> */}

                    <div className={classes.add_txt}>
                        <TextField
                            name="location"
                            variant="outlined"
                            fullWidth
                            value={blogData.location}
                            placeholder="Location"
                            onChange={(e) => setBlogData({ ...blogData, location: e.target.value })}
                        />
                    </div>
                    <div className={classes.add_txt}>

                        <TextField
                            name="tags"
                            variant="outlined"
                            fullWidth
                            placeholder="tags"
                            value={blogData.tags}
                            onChange={(e) => setBlogData({ ...blogData, tags: e.target.value.split(',') })}
                        />
                    </div>

                    <div className={classes.add_txt}>
                        <div className={classes.fileInput}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={(base64) => { setBlogData({ ...blogData, selectedFile: base64 }) }}
                            />
                        </div>
                    </div>
                    <div className={classes.add_txt}>
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
                    </div>
                </form>
            </Paper>
        </div >
    )
}

export default BlogEditor;