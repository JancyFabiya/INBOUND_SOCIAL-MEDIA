import axios from "axios"

const API =axios.create({baseURL: "http://localhost:5000"})

export const getTimelineStory = (id)=> API.get(`/story/${id}/timeline`)

export const detailStory = (id)=> API.get(`/story/${id}/detail`)