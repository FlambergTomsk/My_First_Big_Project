import React from 'react';
import { addMessageActionCreator, updateMessageAreaActionCreator } from '../../redux/dialogs-reducer';
import {connect} from "react-redux";
import Dialogs from './Dialogs';
import { WithAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';




  let mapStateToProps = (state)=>{

    return{
      dialogsPage : state.dialogsPage,

    }
  };


  let mapDispatchToProps = (dispatch)=>{
    return{
      addMessage: (values)=>{
        dispatch(addMessageActionCreator(values));
      }
    }
  }




export default compose (
  connect (mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
  )(Dialogs);