import axios from "axios"

const API =axios.create({baseURL: "http://localhost:5000"})

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('profile'))
//     {
//         req.headers.Authorization = `Bearer ${JSON.stringify(localStorage.getItem('profile').token)}`
//     }
//     return req
// })

export const getUser = (userId)=> API.get(`/user/${userId}`)

export const updateUser = (id,formData)=>API.put(`/user/${id}`,formData)

export const getAllUsers = (id)=> API.get(`/user/${id}/logUser`)

export const followUser = (id,data) => API.put(`/user/${id}/follow`,data)

export const unFollowUser = (id,data) => API.put(`/user/${id}/unfollow`,data)

export const friendPerson = (id) => API.get(`/user/${id}/frnd`)