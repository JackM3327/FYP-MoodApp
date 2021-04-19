import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE, USER_FOLLOWING_STATE_CHANGE, CLEAR_DATA } from "../constants"

const initialState = {
    currentUser: null,
}

export const user = (state = initialState, action) => {

    return {
        ...state,
        currentUser: action.currentUser
    }
}