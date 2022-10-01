const storyReducer=(
    state={storys:[ ],loading:false,error:false,uploading:false},
    action
    
 )=>{
    // console.log('555');
    // console.log(action);
    switch(action.type){
        case "UPLOADS_START":
            return {...state,uploading:true,error:false}
        case "UPLOADS_SUCCESS":
            return {...state,storys: [action.data, ...state.storys],
                
            uploading:false,error:false}
        case "UPLOADS_FAILED":
            return {...state,uploading:false,error:true}     
            
              // belongs to Posts.jsx
    case "STORY_START":
        return { ...state, loading: true, error: false };
      case "STORY_SUCCESS":
        return { ...state, storys: action.data, loading: false, error: false };
      case "STORY_FAIL":
        return { ...state, loading: false, error: true };
      default:
        return state;        
    }

 }

 export default storyReducer