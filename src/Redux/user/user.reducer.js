const InitialState = {
    current_user: null,
}


const UserReducer = (state = InitialState,action) =>{
    switch(action.type){
        case 'User_Reducer':
            return{
                ...state,
                current_user: action.payload,
            }
        default:
            return state;
    }
}

export default UserReducer;