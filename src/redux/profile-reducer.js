import { profileAPI } from "../api/api";

let ADD_POST = 'social-network/profile/ADD-POST';
let DELETE_POST = 'social-network/profile/DELETE-POST';
let SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE';
let GET_STATUS = 'social-network/profile/GET-STATUS'
let SET_STATUS = 'social-network/profile/SET-STATUS'


export const addPostActionCreator = (text)=>({type:ADD_POST, message: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status)=>({type:SET_STATUS, status})
export const deletePostActionCreator = (id) => ({type:DELETE_POST, id})



export const profileGetThunkCreator = (id) => {
    return async dispatch => {
        let data = await profileAPI.profileGet(id)
        dispatch(setUserProfile(data));
    }
}

export const getStatus = (userId) => {
    return async dispatch => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data));
    }
}


export const updateStatus = (status)=>{
    return async dispatch=>{
       let data = await profileAPI.updateStatus(status)
            if (data.resultCode===0){
            dispatch(setStatus(status))};
    }
}




const initialState = {

    postsData: [
        { message: ' ja est props ', likeCounter: ' 0 likes ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQmsW7RCW6p-Vq7joKc29Jhr9zSL650nJ2g&usqp=CAU', id:1 },
        { message: ' My second post ', likeCounter: ' 100 likes ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQmsW7RCW6p-Vq7joKc29Jhr9zSL650nJ2g&usqp=CAU', id: 2 }
    ],

    newPostText: '',

    profile: null,

    status: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                message: action.message,
                likeCounter: 0,
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQmsW7RCW6p-Vq7joKc29Jhr9zSL650nJ2g&usqp=CAU',
                id: 3

            };

            let stateCopy = { ...state };
            stateCopy.postsData = [...state.postsData];

            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '2121212';
            return stateCopy;
        }


        case DELETE_POST: {
           return   {
            ...state,
            postsData: state.postsData.filter(post=>post.id!=action.id)
           }

        }


        case SET_USER_PROFILE: {

            return { ...state, profile: { ...action.profile } }

        }

        case GET_STATUS: {

            return { ...state, status: { ...action.status } }

        }

        case SET_STATUS: {

            return { ...state, status: action.status }

        }



        default:
            return state;


}

}

  
export default profileReducer;