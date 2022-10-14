import API from "./axios"


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getTimelinePosts = (id)=> API.get(`/post/${id}/timeline`)

export const likePost = (id, userId) => API.put(`post/${id}/like`,{userId: userId})

export const deletePost = (id,data) => API.post(`post/${id}/delete`,data).then((result) => {
  console.log(result)
  return result.deleted
}).catch((err) => {
  return err
});