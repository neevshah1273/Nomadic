export default (blogs, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return blogs;
        case 'CREATE':
            return blogs;
        default:
            return blogs;
    }
}