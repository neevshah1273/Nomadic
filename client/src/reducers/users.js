const users = (users =[], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            //console.log(action.type);
            return action.payload;
        default:
            return users;
    }
}

export default users;