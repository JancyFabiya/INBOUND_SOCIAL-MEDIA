import API from "./axios"


export const uploadSImage = (data) => API.post('/upload',data)

export const uploadStory = (data) => API.post('/story',data)