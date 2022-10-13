import API from "./axios"




export const getUser = (userId)=> API.get(`/user/${userId}`)

export const updateUser = (id,formData)=>API.put(`/user/${id}`,formData)

export const getAllUsers = (id)=> API.get(`/user/${id}/logUser`)

export const followUser = (id,data) => API.put(`/user/${id}/follow`,data)

export const unFollowUser = (id,data) => API.put(`/user/${id}/unfollow`,data)

export const friendPerson = (id) => API.get(`/user/${id}/frnd`)

export const searchUser = (data) => API.post('/user/search',data)

export const frndList = (id)=> API.get(`/user/frndlist/${id}`)