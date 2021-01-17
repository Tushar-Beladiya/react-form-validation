import React from "react";
import { Formik } from "formik";

import validateRegForm from "../../helper/regValidation";
import Button from "../Element/Button/Button";
import H2 from "../Element/H2/H2";
import Lable from "../Element/Lable/Lable";
import FormGroup from "../FormGroup/FormGroup";
import Information from "../information/Information";
import { useHistory } from "react-router-dom";

import "./Registration.css";

function Registration() {
  let history = useHistory();
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          c_password: "",
          first_name: "",
          last_name: "",
          checkbox: null,
        }}
        validate={(values) => {
          const errors = validateRegForm(values);
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          history.push("/success");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            <section className="app-body">
              <section className="registration__wrapper">
                <div className="registration-form-container">
                  <Information />{" "}
                  <div className="form-box">
                    <article className="form__article">
                      <header className="register__header">
                        <H2 text="REGISTER FORM" />
                      </header>
                      <form onSubmit={handleSubmit}>
                        <div className="form-row">
                          <FormGroup
                            labletext="First Name*"
                            inputText="text"
                            name="first_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.first_name}
                            errors={
                              errors.first_name &&
                              touched.first_name &&
                              errors.first_name
                            }
                          />
                          <FormGroup
                            labletext="Last Name*"
                            inputText="text"
                            name="last_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.last_name}
                            errors={
                              errors.last_name &&
                              touched.last_name &&
                              errors.last_name
                            }
                          />
                        </div>
                        <div className="form-row">
                          <FormGroup
                            labletext="Email*"
                            inputText="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            errors={
                              errors.email && touched.email && errors.email
                            }
                          />
                        </div>
                        <div className="form-row">
                          <FormGroup
                            labletext="Password*"
                            inputText="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            errors={
                              errors.password &&
                              touched.password &&
                              errors.password
                            }
                          />
                          <FormGroup
                            labletext="Confirm Password*"
                            inputText="password"
                            name="c_password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.c_password}
                            errors={
                              errors.c_password &&
                              touched.c_password &&
                              errors.c_password
                            }
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-check-group">
                            <input
                              type="checkbox"
                              name="checkbox"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.checkbox}
                            />
                            <Lable
                              text={[
                                "I agree to the ",
                                <span>Terms &amp; Conditions</span>,
                              ]}
                              className="form-check-label"
                            />
                            <span className="form_error">
                              {errors.checkbox &&
                                touched.checkbox &&
                                errors.checkbox}
                            </span>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="btn primary"
                          text="Register"
                        />
                      </form>
                    </article>
                  </div>
                </div>
              </section>
            </section>
          </>
        )}
      </Formik>
    </>
  );
}

export default Registration;
