import { cartButtonType } from "./cart.type";

const Initaial_State = ({
    hidden:true,
})

const cartReducer = (state = Initaial_State, action) => {
    switch (action.type) {
        case cartButtonType.toggle_button:
            return {
                ...state,
                hidden:!state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;