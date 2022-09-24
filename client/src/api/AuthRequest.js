import axios from "axios"

const API =axios.create({baseURL: "http://localhost:5000"})

export const logIn = (formData)=> API.post('/auth/login',formData)
export const signUp = (formData)=> API.post('/auth/register',formData)
export const adminlogIn = (formData)=> API.post('/auth/admin',formData)
export const googleLogin = (formData)=> API.post('/auth/googlelogin',formData)