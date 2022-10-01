import * as UploadApi from '../api/UploadRequest'
// import * as UploadApi from '../Api/UploadRequest'

export const uploadImage=(data)=>async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error);
    }
}

export const uploadPost=(data)=>async(dispatch)=>{
    dispatch({type:"UPLOAD_START"})
    try {
       
       const newPost=await UploadApi.uploadPost(data) 
       console.log('data')
       console.log(newPost.data)
       dispatch({type:'UPLOAD_SUCCESS',data:newPost.data})
    } catch (error) {
       console.log(error); 
       dispatch({type:"UPLOAD_FAILED"})
    }
}

