import * as api from '../api';


export const getBlogs = () => async(dispatch)=>{
    try {
        const {data} = await api.fetchBlogs();

        dispatch({ type : 'FETCH_ALL',payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createBlog = (blog) => async(dispatch) =>{

    //console.log(blog);

    try {
        const {data} = await api.createBlogs(blog);
        
        dispatch({ type: 'CREATE',payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteBlog = (history,id) => async(dispatch) =>{
    console.log('ert');
    try {
        console.log(id);
        await api.deleteBlogs(id);
        console.log('Problem in dispatch');

        //dispatch({type: 'DELETE',payload:id});
        
        history.push('/Feed');
        //console.log('Should be done');
          
    } catch (error) {
        console.log(error.message);
    }
}