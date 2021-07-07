import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import * as Yup from 'yup';
import TextError from './../../../assets/TextError';



const MyPosts = (props) => {


  const initialValues = {
    newPost: ''
  }

  const validationSchema = Yup.object({
    newPost: Yup.string().required('Нельзя отправить пустой пост').min(3, 'Пост должен содержать минимум три символа').max(150, 'Пост может содержать максимум 150 символов')
  })

  let addPost = (values)=> {
  props.addPost(values.newPost);
  

  
  }
  let postsElements = props.profilePage.postsData.map(post => <Post key = {post.id}  message={post.message} likeCounter={post.likeCounter} image={post.image} />)

  return (
  <div>
      <div>
        My posts
               </div>
      <div>
        New posts
               </div>
      <Formik
      initialValues = {initialValues}
      onSubmit = {(values, { resetForm })=> {
        addPost(values);
        resetForm();
    }}
      validationSchema = {validationSchema}
      >
{formik=>{
 return <Form>
      <Field className = {!formik.isValid? s.fieldError: null}
        as='textarea'
        name='newPost'
        type = 'text'
        placeholder = 'Текст нового поста'
      />
      <ErrorMessage name = 'newPost' component = {TextError}/>
      <div>
        <button type = 'submit'disabled = {formik.dirty&&!formik.isValid}>Add post</button>
      </div>
      </Form>
      }}
      </Formik>
      <div>
        {postsElements}
      </div>
  </div>)
}
export default MyPosts;