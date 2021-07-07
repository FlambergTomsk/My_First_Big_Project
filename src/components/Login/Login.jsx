import { Field, Form, Formik, useFormik, validateYupSchema } from "formik";
import s from './Login.module.css';
import React from "react";
import * as Yup from 'yup';
import axios from "axios";
import { connect } from "react-redux";
import { signInThunk, wrongLogin } from "../../redux/auth-reducer";
import { Redirect } from "react-router";




const Login = (props) =>{

  if (props.isAuth){
    return <Redirect to ='/profile'/>
  }

 const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Введите корректный email')
    .required('Обязательно'),
    password: Yup.string()
    .max(15, 'Не больше 15 символов')
    .min(6, 'Не менее 6 символов')
    .typeError('Не менее 6 и не больше 15 символов')
    .matches(/[a-zA-Z]/, 'Пароль должен содержать только латинские буквы')
    .required('Обязательно')
  });
 
   let handleSubmit = (values)=>{
    let email = values.email;
    let password = values.password;
    let rememberMe = values.rememberMe;
    props.signInThunk(email, password, rememberMe);
 
  }

  



return (
<Formik
  initialValues={ {
    email: '',
    password: '',
    rememberMe: false
  }}
  validateOnBlur
  onSubmit = {handleSubmit}
  validationSchema = {validationSchema}
  >


  {({values, errors, touched,  isValid, handleSubmit, dirty})=>(
    <div className= {s.form}>

      

    <div>
      <label htmlFor={"email"}>Email</label>
      <br/>
      <Field
      className = {s.field}
      type="email"
      name = 'email'
      value = {values.email}
      />
    </div>
    {touched.email && errors.email?<p className = {s.error}>{errors.email}</p>: <p className = {s.error}></p>}

      <div>
      <label htmlFor={"password"}>Password</label>
      <br/>
      <Field type="password"
      className = {s.field}
      name = 'password'
      value = {values.password}
      />
    </div>
    {touched.password && errors.password? <p className = {s.error}>{errors.password}</p>: <p className = {s.error}></p>}
    <div className = {s.error}>{props.textError}</div>
    <div>
      <Field type="checkbox"  name = 'rememberMe' checked = {values.rememberMe} />Remember Me
    </div>


    <button
    className = {s.button}

    disabled = {!isValid && !dirty}
    onClick = {handleSubmit}
    type = {"submit"}
    >Sign In </button>

    </div>
    

  )}
</Formik>
    
  )
}
export default Login;