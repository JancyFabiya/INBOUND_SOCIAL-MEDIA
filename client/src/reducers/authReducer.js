const authReducer = (
    state = { authData: null, loading: false, error: false, updateLoading: true },
    action
) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true, error: false }
        case "AUTH_SUCCESS":
            // console.log('aqee',a/ction.data);
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, loading: false, error: false }
        case "AUTH_FAIL":
            return { ...state, loading: false, error: true }


        case "UPDATING_START":
            return { ...state, updateLoading: true, error: false }
        case "UPDATING_SUCCESS":
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data, updateLoading: false, error: false }
        case "UPDATING_FAIL":
            return { ...state, updateLoading: false, error: true }


        case "FOLLOW_USER":
            console.log('heloooooo',state.authData);
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, following: [...state.authData.user.following, action.data] } } }


        case "UNFOLLOW_USER":
            console.log('haiiiiiii',state.authData);
            return { ...state, authData: { ...state.authData, user: { ...state.authData.user, following: [...state.authData.user.following.filter((personId) => personId !== action.data)] } } }

        case "LOG_OUT":
            localStorage.clear()
            return { ...state, authData: null, loading: false, error: false, updateLoading: false }
        default:
            return state
    }
}

export default authReducer