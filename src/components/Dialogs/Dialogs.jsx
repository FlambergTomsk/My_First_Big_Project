import s from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import DialogsItems from './Dialog/DialogsItems';
import Message from './Message/Message';
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextError from './../../assets/TextError';




const DialogsWithoutMemo = (props) =>{


let addMessage = (values)=>{
  props.addMessage(values.textarea);
  console.log(values.textarea);
}



let state = props.dialogsPage;

let dialogsElements = state.dialogsData.map(dialog => <DialogsItems image = {dialog.image} id={dialog.id} name={dialog.name}  />)
let messagesElements = state.messagesData.map(message => <Message message={message.message} />)

const initialValues = {
  textarea: ''
}

const validationSchema = Yup.object({
  textarea: Yup.string().required('Нельзя отправить пустое сообщение').min(3, 'Сообщение должно содержать минимум три символа').max(150, 'Сообщение может содержать максимум 150 символов')
})


return (
    <Formik
      initialValues = {initialValues}
      onSubmit = {addMessage}
      validationSchema = {validationSchema}
    >
{formik=>{
 return <Form>
      <div className={s.dialogs}>
        <div >
          {dialogsElements}
        </div>
        <div>
          {messagesElements}
          <Field
            className= {!formik.isValid? s.fieldError: s.textarea}
            as='textarea'
            placeholder='Новое сообщение'
            name = 'textarea'
            type  = 'text'
          />
          <ErrorMessage name = 'textarea' component = {TextError}/>
          <div> <button type = 'submit'disabled = {formik.dirty&&!formik.isValid}>Add message</button>
          </div>
        </div>
      </div >
      </Form>
}}
    </Formik>
    
  )
}

const Dialogs = React.memo(DialogsWithoutMemo);

export default Dialogs;