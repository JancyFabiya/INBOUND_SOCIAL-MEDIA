const commandReducer=(
    state={command:[ ],loading:false,error:false,uploading:false},
    action
    
 )=>{
    // console.log('555');
    // console.log(action);
    switch(action.type){
        case "COMMAND_START":
            return {...state,uploading:true,error:false}
        case "COMMAND_SUCCESS":
            return {...state,command: [action.data, ...state.posts],
                
            uploading:false,error:false}
        case "COMMAND_FAILED":
            return {...state,uploading:false,error:true}     
            
        default:
            return state       
    }

 }

 export default commandReducer