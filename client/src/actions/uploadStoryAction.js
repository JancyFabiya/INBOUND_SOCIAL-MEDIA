import * as UploadApi from '../api/UploadStoryRequest'
// import * as UploadApi from '../Api/UploadRequest'

export const uploadSImage=(data)=>async(dispatch)=>{
    try {
        await UploadApi.uploadSImage(data)
    } catch (error) {
        console.log(error);
    }
}

export const uploadStory=(data)=>async(dispatch)=>{
    dispatch({type:"UPLOADS_START"})
    try {
       
       const newPost=await UploadApi.uploadStory(data) 
       console.log('data')
       console.log(newPost.data)
       dispatch({type:'UPLOADS_SUCCESS',data:newPost.data})
    } catch (error) {
       console.log(error); 
       dispatch({type:"UPLOADS_FAILED"})
    }
}
