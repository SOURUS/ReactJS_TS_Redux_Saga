export default (state:any = [], action:any) => {
    switch(action.type) {
        case 'FETCH_USERS':
            return action.payload;
        
        default:
            return state;
    }
};