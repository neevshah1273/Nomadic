import React,{useState, useEffect} from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {signin,signup,userAvl } from '../../actions/auth';

import useStyles from './styles';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Container} from 'reactstrap';
import {Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import {Button} from '@material-ui/core';
import Icon from './icon';


const Home = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: ''});
    const [isSignup,setIsSignup] = useState(true);
    const [usernameAvl,SetUsernameAvl] = useState(true);
    
    //let usernameAvl = true;
    
    let ttx = useSelector((state)=> state.Users);
    console.log(ttx);

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const handleChange = (e) => {
        //console.log(e.target.name);
        setFormData({ ...formData, [e.target.name] : e.target.value });
        //console.log(e.target.value);
        //console.log(formData);
        if(isSignup){
            //console.log(formData.username);
            dispatch(userAvl(formData.username));
        }
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log('mm;klm;m;k');
        if(isSignup){
            dispatch(signup(formData, history))
        }else{
            dispatch(signin(formData, history))
        }
    }
    
    


    const switchMode = () => {
        setFormData({ userame: '', email: '', password: ''});
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };



    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
    
        try {
          dispatch({ type: 'AUTH', data: { result, token } });
    
          history.push('/Feed');
        } catch (error) {
          console.log(error);
        }
    }

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    return(
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="title">Nomadic</h1>
                </div>
                <div className="col-lg-6">
                    <div >
                        {isSignup?
                            <h3 className="title2 d-flex justify-content-center">SIGN UP</h3>
                            :(
                                <h3 className="title2 d-flex justify-content-center">SIGN IN</h3>
                            )
                        }
                        
                        <Jumbotron >
                            <Container>
                                <Form onSubmit={handleSubmit}>
                                    {isSignup?
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text sptext">@</div>
                                            </div>
                                            <Input valid={usernameAvl} onChange={handleChange} type="text" name="username" id="username" placeholder="username" />
                                            {usernameAvl?
                                                <FormFeedback valid tooltip>that name is available</FormFeedback>
                                                :(
                                                    <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                                                )
                                            }
                                        </div>
                                    </FormGroup>    
                                    :(<div></div>)

                                    }
                                    <FormGroup className="mt-5">
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" onChange={handleChange} name="email" id="exampleEmail" placeholder="Enter your E-mail" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" onChange={handleChange} name="password" id="examplePassword" placeholder="Enter a password" />
                                    </FormGroup>
                                    <div className="submit-btn d-flex justify-content-center">
                                        <Button color="primary" type="Submit" className="submit mt-1 mb-1" /*disabled={!isSignup}*/ >
                                            
                                                Submit
                                            
                                        </Button>
                                    </div>
                                    
                                </Form>

                                
                            </Container>
                            <GoogleLogin
                                clientId="667641871160-1dde9hrlvmicvg7v4r4qvmcm5uau0tic.apps.googleusercontent.com"
                                render={(renderProps) => (
                                <Button 
                                    className={classes.googleButton} 
                                    color="primary" 
                                    fullWidth 
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled} 
                                    startIcon={<Icon />} 
                                    variant="contained"
                                >
                                    {isSignup?
                                    ('Google Sign Up'):('Google Sign In')
                                    }
                                </Button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleError}
                                cookiePolicy="single_host_origin"
                                
                            />
                            <Button className="switchButton mt-1" onClick={switchMode}>
                            {
                                isSignup?("Already have an account? Login"):("New User? Register here")
                            }
                            </Button>

                        </Jumbotron>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;