import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../components/Users/Object-helper";

let FOLLOW = 'social-network/users/FOLLOW';
let UNFOLLOW = 'social-network/users/UNFOLLOW';
let SET_USERS = 'social-network/users/SET-USERS';
let CHANGE_PAGE = 'social-network/users/CHANGE-PAGE';
let GET_TOTAL_COUNT = 'social-network/users/GET-TOTAL-COUNT';
let IS_LOADING = 'social-network/users/IS-LOADING';
let BUTTON_BLOCK = 'social-network/users/BUTTON-BLOCK';

export const follow = (userId)=>({type:FOLLOW, userId});
export const unfollow = (userId)=>({type:UNFOLLOW, userId});
export const setUsers = (users)=>({type:SET_USERS, users});
export const getTotalCount = (totalCount)=> ({type:GET_TOTAL_COUNT, totalCount })
export const changePage = (page)=> ({type:CHANGE_PAGE, page});
export const isLoading = (loading)=> ({type:IS_LOADING, loading});
export const buttonBlock = (block, id)=>({type: BUTTON_BLOCK, block, id});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async dispatch => {
        dispatch(isLoading(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(isLoading((false)));
        dispatch(setUsers(data.items));
        dispatch(getTotalCount(data.totalCount));
    }
}


const followUnfollowFlow  = async (dispatch, userId, apiMethod, actionCreator)=>{
    dispatch(buttonBlock(true, userId));
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(buttonBlock(false, userId));
}



export const unfollowThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.followDelete.bind(followAPI), unfollow)
    }
}


export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, followAPI.followPost.bind(followAPI), follow)
    }
}





const initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 3,
    loading: false,
    buttonBlockArray: [],
};



const userReducer=(state = initialState, action)=>{
    switch(action.type){

        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
            };

        case SET_USERS:{
            return {...state, users: [...action.users]}
        };

        case CHANGE_PAGE: {
            return {...state, currentPage: action.page}
        };
        
        case GET_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        };
        
        case IS_LOADING: {
            return {...state, loading: action.loading}
        }

        case BUTTON_BLOCK:{
            return {
                ...state,
                    buttonBlockArray: action.block
                    ? [...state.buttonBlockArray, action.id]
                    : state.buttonBlockArray.filter(id=>id!=action.id)
            }
        }

        default:
            return state;
}

}
  
export default userReducer;