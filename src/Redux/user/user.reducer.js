const Initaial_State = {
    current_user:null,
}

const UserReducer = (state=Initaial_State,action) => {
    switch(action.type){
        case 'Set_Current_User':
            return{
                ...state,
                current_user: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;