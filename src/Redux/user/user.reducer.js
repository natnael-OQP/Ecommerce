const Initial_State = {
    current_user:'',
}

 const UserReducer = (state, action) => ({
    switch(action.type) {
        case 'Set_Current_User':
            return{
                
            }
        default:
            return state;
    }

})

export default UserReducer;