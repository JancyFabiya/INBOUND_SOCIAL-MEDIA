const adminReducer = (
    state = { adminData: null, loading: false, error: false},
    action
) => {
    switch (action.type) {
        case "ADMIN_START":
            return { ...state, loading: true, error: false }
        case "ADMIN_SUCCESS":
            localStorage.setItem('admin', JSON.stringify({ ...action?.data }))
            return { ...state, adminData: action.data, loading: false, error: false }
        case "ADMIN_FAIL":
            return { ...state, loading: false, error: true }

        case "LOG_OUT":
            localStorage.removeItem('admin')
            return { ...state, adminData: null, loading: false, error: false }
        default:
            return state
    }
}

export default adminReducer