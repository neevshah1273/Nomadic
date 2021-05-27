import * as api from '../api';

export const signin = (formData,history) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);

        dispatch({type:'AUTH',data });

        history.push('/Feed');
    } catch (error) {
        console.log(error.message);
    }
}

export const signup = (formData,history) => async (dispatch) => {
    try {
        console.log(formData);

        const {data} = await api.signUp(formData);

        dispatch({type:'AUTH',data });
        

        history.push('/Feed');
    } catch (error) {
        console.log(error.message);
    }
}

export const getUsers = (username) => async(dispatch)=>{
    try {
        //console.log(username);
        const {data} = await api.userDetails(username); 
        console.log('data');
        console.log(data);

        
        dispatch({ type : 'FETCH_USER',payload : data});

    } catch (error) {
        console.log(error.message);
    }
}


export const userAvl = (username) => async (dispatch) => {
    try {
        console.log(username);

        const {data} = await api.userAvl(username);

        
        dispatch({ type : 'CHECK_AVL',payload : data});
    } catch (error) {
        console.log(error.message);
    }
}