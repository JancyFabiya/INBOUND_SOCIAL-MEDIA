import * as PostApi from '../api/StoryRequest'

export const getTimelineStory = (id)=>async(dispatch)=>{
    dispatch({type: "STORY_START"})
    try {
        const {data} = await PostApi.getTimelineStory(id);
    dispatch({type: "STORY_SUCCESS", data: data})
    } catch (error) {
        dispatch({type: "STORY_FAIL"});
        console.log(error);
    }
}

export const detailStory = (id)=>async(dispatch)=>{
    dispatch({type: "STORY_START"})
    try {
        const {data} = await PostApi.detailStory(id);
    dispatch({type: "STORY_SUCCESS", data: data})
    } catch (error) {
        dispatch({type: "STORY_FAIL"});
        console.log(error);
    }
}
