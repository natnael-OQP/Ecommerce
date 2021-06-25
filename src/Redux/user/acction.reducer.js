import UserActionTypes from './user.type'
export const setCurrentUser = user => ({
    type: UserActionTypes.set_current_user,
    payload:user
})