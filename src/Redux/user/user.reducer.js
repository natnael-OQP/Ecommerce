const Initial_State ={
    current_user: null,
}

const UserReducer = (state=Initial_State,action) =>{
    switch(action.type){
        case 'Set_User_State':
            return{
                ...state,
                current_user: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;