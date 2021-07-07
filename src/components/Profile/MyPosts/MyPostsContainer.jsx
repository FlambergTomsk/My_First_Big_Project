import React from 'react';
import { addPostActionCreator, updateActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import s from './MyPosts.module.css';
import {connect} from "react-redux";


let mapStateToProps  = (state) => {

  return {
    profilePage: state.profilePage
  };
}
  
  let mapDispatchToProps = (dispatch)=>{

  return{

         addPost: (values) => {
            dispatch(addPostActionCreator(values));
          },


        }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

  
  
export default MyPostsContainer;