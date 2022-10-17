
import "./NewPassword.scss";
import * as Yup from 'yup';
import { Field, Form, Formik } from "formik";
import React, { useState } from 'react'


const SignupSchema = Yup.object().shape({
  password: Yup.string().required("This field is required"),
  rePassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Գաղտնաբառերը չեն համապատասխանում"
    )
  })
});
export const NewPassword = () => {
  const [submit,setSubmit] = useState(false)

  const isAnonymous = false;
  const initialValues = {
    password:"",
    rePassword:""
  }

  return (
    <div className="newPassword">
      <h1>Գաղտնաբառի վերականգնում</h1>
        <Formik
         initialValues={initialValues}
       validationSchema={SignupSchema}
       onSubmit={values => {
        alert(JSON.stringify(values,null,2))
       
       }}
     >
       {({ errors,values,isValid, touched,handleBlur,handleSubmit,handleChange }) => (
         <Form onSubmit={handleSubmit}>
          
        
           <Field  onChange={handleChange} onBlur={handleBlur} name="password"  value={values.password} type="password" placeholder="նոր Գաղտնաբառ" className={errors.password && touched.password ? "error" : ""} />
       
           <Field onChange={handleChange} value={values.rePassword} onBlur={handleBlur} name="rePassword" type="password" placeholder="Կրկնեք գաղտնաբառը" className={errors.rePassword && touched.rePassword ? "error" : ""} />
           <span className="error">
              {errors.rePassword}
            </span>
           <button type="submit" disabled={!isValid}>Պահպանել</button>
           
         </Form>
       )}
     </Formik>
     
    </div>
  )
}
