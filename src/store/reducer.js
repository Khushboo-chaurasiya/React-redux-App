const initialState = {username : ""};

const reducer = (state = initialState , action) => {
    const newState = {...state};
    switch(action.type){
        case 'LOGIN_CLICKED':
            newState.username = action.value;
            break;
        default :
        newState.username = "Something went wrong!!"
    }
    return newState;
}

export default reducer;