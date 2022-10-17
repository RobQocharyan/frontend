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
    navigate("/login")
}

const sendMesssagePassword = ()=>{
  navigate("/messagePassword")

}

  return (
    <div className="rememberPassword">
      <h1>Մոռացել եք գաղտնաբառը?</h1>
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
          }}
        >
          {({ errors,isValid, touched }) => (
            <Form>
              
              <Field name="email" type="email" placeholder="Email"   className={errors.email && touched.email ? "error" : ""} />
            
              <button type="submit" disabled={!isValid} onClick={sendMesssagePassword}>Ուղարկել</button>
              <p className="remember" onClick={login}>Վերադառնալ Մուտքի էջ</p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
