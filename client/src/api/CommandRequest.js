import axios from "axios"

const API =axios.create({baseURL: "http://localhost:5000"})

export const uploadCommand =(data)=> API.post('/command/',data)

export const getCmnd = (id)=>API.get(`/command/${id}`)