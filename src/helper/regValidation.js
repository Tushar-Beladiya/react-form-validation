// import * as yup from "yup";

// const schema = yup.object().shape({
//   first_name: yup.string().required("first name is required!"),
//   last_name: yup.string().required("Last name is required!"),
//   email: yup
//     .string()
//     .email("Please enter valid email")
//     .required("Email is required!"),
//   password: yup
//     .string()
//     .required("Plaese Enter Password")
//     .min("Password must be at least 6 characters"),
//   c_password: yup.string().required("Password is required"),
// });

// export default schema;

const validateRegForm = (values) => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = "First Name is required";
  }
  if (!values.last_name) {
    errors.last_name = "Last Name is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length <= 6) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!values.c_password) {
    errors.c_password = "Password is required";
  }
  if (values.c_password !== values.password) {
    errors.c_password = "Password must me matched";
  }
  if (!values.checkbox) {
    errors.checkbox = "You need to agree to the Ts & Cs to register";
  }
  if (!values.email) {
    errors.email = "Last Name is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email must be a valid email address";
  }
  return errors;
};

export default validateRegForm;
