import * as Yup from 'yup';
import "./RememberPassword.scss";
import React from 'react'
import { Field, Form, Formik } from "formik";
import { useNavigate } from 'react-router';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export const RememberPassword = () => {
  const initialValues = {
    email:""
  }
  const navigate = useNavigate()


  const login = ()=>{
    navigate("/frontend/login")
}

const sendMesssagePassword = ()=>{
  navigate("/frontend/messagePassword")

}

  return (
    <div className='px-2'>    
      <div className="rememberPassword">
        <p className='title text-center'>Մոռացե՞լ եք գաղտնաբառը</p>
        <div className="text">
          <p>Մուտքագրեք այն էլ. փոստի հասցեն, որը նշել եք գրանցման ժամանակ և մենք կուղարկենք Ձեզ նամակ` գաղտնաբառի վերականգնման համար անհրաժեշտ 
            հրահանգը:</p>
        </div>
        <div className="formik">
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={values => {
              alert(JSON.stringify(values,null,2))
            }}>
            {({ errors,isValid, touched }) => (
              <Form>
                
                <Field name="email" type="email" placeholder="Email *"   className={errors.email && touched.email ? "error" : ""} />
              
                <button type="submit" disabled={!isValid} onClick={sendMesssagePassword}>Ուղարկել</button>
                <p className="remember" onClick={login}>Վերադառնալ <b> Մուտքի էջ </b></p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
