import API from "./axios"


export const getMessages = (id)=> API.get(`/message/${id}`)
export const addMessage = (data)=> API.post('/message/',data)