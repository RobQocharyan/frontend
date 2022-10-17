
import "./Login.scss"
import React from 'react'
import * as Yup from 'yup';
import { Field, Form, Formik } from "formik";
import { icons } from './../../Pages/Registartion/icons';
import { useNavigate } from 'react-router';
const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup
    .string()
    .required()
  });

export const Login = () => {

    const navigate = useNavigate()

    const registration =()=>{
      navigate("/registration")
    
    }

    const rememberPassword  = ()=>{
      navigate("/rememberPassword")

    }
    const initialValues ={
        email:"",
        password:""
    }

   

  return (
    <div className="login">
        <h1>Մուտք</h1>
        <div className="registr" onClick={registration}>Ստեղծել նոր էջ</div>
        <div className="loginForm">
        <Formik
         initialValues={initialValues}
       validationSchema={SignupSchema}
       onSubmit={values => {
        alert(JSON.stringify(values,null,2))

       }}
     >
       {({ errors,isValid, touched }) => (
         <Form>
          
           <Field name="email" type="email" placeholder="Email"   className={errors.email && touched.email ? "error" : ""} />
        
           <Field name="password" type="password" placeholder="Գաղտնաբառ" className={errors.password && touched.password ? "error" : ""} />

           <div>
                <Field name="checkbox" type="checkbox"className="rememberMe" />
                <span>Հիշել</span>
           </div>

           <button type="submit" disabled={!isValid}>Մուտք</button>
           <p className="remember" onClick={rememberPassword}>Մոռացել ե՞ք</p>
         </Form>
       )}
     </Formik>
     <div className="formLine"></div>
     <div className="formFooter">
        <p>Մուտք սոց. ցանցերի միջոցով</p>
        <div className="icons">
            {icons.google}
            {icons.facebook}
            {icons.instagram}
            {icons.twitter}
        </div>
     </div>
        </div>
    </div>
  )
}
