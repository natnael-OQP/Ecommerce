const Initaial_State = ({
    current_user:null,
})

const UserReducer = (state = Initaial_State, action) => {
    switch (action.type) {
        case  'set_current_user':
            return {
                ...state,
                current_user: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;