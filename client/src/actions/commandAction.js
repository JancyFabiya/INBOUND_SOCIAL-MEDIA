import * as UploadApi from '../api/CommandRequest'

export const uploadCommand = (data) => async(dispatch)=>{
    dispatch({type:"COMMAND_START"})
    try{
        const newCommand = await UploadApi.uploadCommand(data)
        dispatch({type:'COMMAND_SUCCESS',data:data})
    }catch (error){
        console.log(error);
        dispatch({type:"COMMAND_FAILED"})
    }
}


export const getCmnd = (id)=>async(dispatch)=>{
    dispatch({type: "COMMAND_START"})
    try {
        const {data} = await UploadApi.getCmnd(id);
    dispatch({type: "COMMAND_START", data: data})
    } catch (error) {
        console.log(error);
        dispatch({type: "COMMAND_START"});
    }
}
