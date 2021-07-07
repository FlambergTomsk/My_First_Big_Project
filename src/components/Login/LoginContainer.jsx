import { Field, Form, Formik, useFormik, validateYupSchema } from "formik";
import s from './Login.module.css';
import React from "react";
import * as Yup from 'yup';
import axios from "axios";
import { connect } from "react-redux";
import { signInThunk} from "../../redux/auth-reducer";
import Login from "./Login";






let mapStateToProps = (state)=>{
    return{
      textError: state.auth.textError,
      isAuth: state.auth.isAuth
    };
  }



export default connect(mapStateToProps,{signInThunk})(Login);


