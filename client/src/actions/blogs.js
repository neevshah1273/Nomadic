import * as api from '../api';


export const getBlogs = () => async(dispatch)=>{
    try {
        const {data} = await api.fetchBlogs();

        dispatch({ type : 'FETCH_ALL',payload : data});
    } catch (error) {
        console.log(error.message);
    }
}