import "./Login.scss";
import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { icons } from "../Registartion/icons";
import { useNavigate } from "react-router";
const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const Login = () => {
  const navigate = useNavigate();

  const registration = () => {
    navigate("/frontend/registration");
  };

  const rememberPassword = () => {
    navigate("/frontend/rememberPassword");
  };
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="login-page">
      <div className="login">
        <p className="title">Մուտք</p>

        <div className="loginForm">
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ errors, isValid, touched }) => (
              <Form>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={errors.email && touched.email ? "error" : ""}
                />

                <Field
                  name="password"
                  type="password"
                  placeholder="Գաղտնաբառ"
                  className={errors.password && touched.password ? "error" : ""}
                />

                <div className="d-flex justify-content-start my-3">
                  <Field
                    name="checkbox"
                    type="checkbox"
                    id="rememberMe"
                    className="rememberMe"
                  />
                  <div className="checkboxDiv">
                    <label htmlFor="rememberMe">Հիշել</label>
                    <p className="remember" onClick={rememberPassword}>
                      Մոռացել եք ?
                    </p>
                  </div>
                </div>

                <button type="submit" disabled={!isValid}>
                  Մուտք
                </button>
              </Form>
            )}
          </Formik>
          <div className="formLine"></div>
          <div className="formFooter">
            <div className="ttext">
              <div className="registr" onClick={registration}>
                  Ստեղծել նոր էջ
              </div>
              <p>Մուտք սոց. ցանցերի միջոցով</p>
            </div>

            <div className="icons">
              {icons.google}
              {icons.facebook}
              {icons.instagram}
              {icons.twitter}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
