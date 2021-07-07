import React from "react";
import { authAPI } from "../api/api";

let SET_USER_AUTH_DATA = 'social-network/auth/SET-USER-AUTH-DATA';
let WRONG_LOGIN = 'social-network/auth/WRONG-LOGIN';

export const setUserAuthData = (id, email, login, isAuth)=>({type:SET_USER_AUTH_DATA, data : {id, email, login, isAuth}});

export const wrongLogin = (textError)=>({type: WRONG_LOGIN, textError})


const initialState = {

    id: null,
    email: null,
    login: null,
    isAuth: false,
    textError: '',
};


const authReducer =    (state = initialState, action)=>{
    switch(action.type){

        case SET_USER_AUTH_DATA:
            return {
                    ...state,
                    ...action.data,
                    };
        
        case WRONG_LOGIN:
            return{
                ...state,
                textError: action.textError
                  };
        

        
                    


        default:
            return state;
}

}
  




export const authGet = () => {
    return async dispatch => {
        let data = await authAPI.authGet();
        if (data.resultCode === 0) {
            let { id, email, login } = data.data;
            dispatch(setUserAuthData(id, email, login, true))
        };
    }
}

export const signInThunk = (email, password, rememberMe) => {
    return async dispatch => {
        let data = await authAPI.signIn(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(authGet());
        }
        else {
            dispatch(wrongLogin(data.messages));
        }
    }
}

export const logout = ()=>async (dispatch)=>{
        let response = await authAPI.logout();
               if(response.data.resultCode===0){
                dispatch (setUserAuthData(null, null, null, false))
            };
            
    } 

    

export default authReducer;
