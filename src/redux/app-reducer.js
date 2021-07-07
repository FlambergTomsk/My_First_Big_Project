import React from "react";
import { authGet } from "./auth-reducer";

let SET_SUCCES  = 'social-network/app/SET-SUCCES ';

export const initializedSuccess = ()=>({type:SET_SUCCES });



const initialState = {
    initialized: false
};


const appReducer =  (state = initialState, action)=>{
    switch(action.type){

        case SET_SUCCES :
            return {
                    ...state,
                    initialized:true,
                    };
        default:
            return state;
}

}
  
export const initializedApp = () => async (dispatch) => {
    let promise = dispatch(authGet());
    await Promise.all([promise])
    dispatch(initializedSuccess())
}





export default appReducer;