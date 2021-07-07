import React from 'react';
import { Form, Formik, validateYupSchema } from 'formik';
import * as yup from 'yup';
import f from './Error.module.css'


function TextError (props){
    return(
        <div className = {f.error}>
            {props.children}
        </div>
    )}

export default TextError;