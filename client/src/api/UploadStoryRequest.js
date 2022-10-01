import axios from "axios"

const API =axios.create({baseURL:"http://localhost:5000"})

export const uploadSImage = (data) => API.post('/upload',data)

export const uploadStory = (data) => API.post('/story',data)