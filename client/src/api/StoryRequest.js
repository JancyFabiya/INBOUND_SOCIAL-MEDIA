import API from "./axios"


export const getTimelineStory = (id)=> API.get(`/story/${id}/timeline`)

export const detailStory = (id)=> API.get(`/story/${id}/detail`)