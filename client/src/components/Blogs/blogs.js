import React,{useState,useEffect} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Blog from './Blog/blog.js';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './blogs.css';

const Blogs = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const Blogs = useSelector((state) => state.blogs);
    const classes = useStyles();
    const theme = useTheme();
    //console.log(Blogs);
    //console.log(Blogs);

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')).result);
        //console.log(user);
    },[user]);


    return (
        !Blogs.length ? <CircularProgress /> : (
            Blogs.map((blog) => (
                <Grid key={blog._id} item >
                    <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <div  className="flex flex-row">
                                    <div>
                                        <Typography component="h5" variant="h5">
                                            <Link
                                                to={{
                                                    pathname: `/blogs/${blog._id}`
                                                }}
                                            >
                                                {blog.title}
                                            </Link>
                                        </Typography>
                                    </div>
                                    {user.username==blog.creator?
                                        <div>
                                        <button className="btn btn-lg btn-primary btn1">Delete</button>
                                        </div>
                                    :
                                    <div></div>    
                                    }
                                    
                                </div>

                                <Typography variant="subtitle1" color="textSecondary">
                                    <Link
                                        to={`/users/${blog.creator}`}
                                    >
                                        Created By {blog.creator}
                                    </Link>
                                </Typography>
                            </CardContent>
                            
                        </div>
                        
                        {blog.selectedFile ? (
                            <CardMedia
                                className={classes.cover}
                                image={blog.selectedFile}
                                title={blog.title}
                            />
                        ) : (
                            <div>
                                nullimage
                            </div>
                        )}
                    </Card>
                    {/* <Blog blog={blog}/> */}
                    
                    
                </Grid >
            ))
            // <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            //     <div>blogg</div>
            //     <Grid item xs={12} sm={6}>
            //         {/*<Blog blog={blog}/>*/}
            //         <div>vff</div>
            //     </Grid>
            // </Grid>
        )

    );
}
export default Blogs;