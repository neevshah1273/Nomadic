const blogs = (blogs =[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return blogs;
        default:
            return blogs;
    }
}

export default blogs;