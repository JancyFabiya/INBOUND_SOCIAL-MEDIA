import axios from "axios"

const API =axios.create({baseURL:"http://localhost:5000"})
export const uploadImage = (data)=> API.post('/upload',data)
// console.log('3456789');
// console.log(uploadImage);
// export const uploadImage=async(data)=>{
//     try{
//         const hello=await API.post('/upload/',data)
//         console.log(hello)
//     }catch(error){
//         console.log(error)
//     }
   
    
// }


export const uploadPost = (data)=> API.post('/post',data)