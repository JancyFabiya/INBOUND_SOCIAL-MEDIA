import API from "./axios"



export const uploadCommand =(data)=> API.post('/command/',data)

export const getCmnd = (id)=>API.get(`/command/${id}`)