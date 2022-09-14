import * as AuthApi from '../api/AuthRequest'

export const adminlogIn = (formData) => async(dispatch) => {

    dispatch({type: "ADMIN_START"})
    try {
        const {data} = await AuthApi.adminlogIn(formData)
        dispatch({type: "ADMIN_SUCCESS",data: data})
    } catch (error) {
       console.log(error); 
       dispatch({type: "ADMIN_FAIL"})
    }
}