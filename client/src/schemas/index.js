import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-z]).{5,}$/;
//min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
export const basicSchema = yup.object().shape({
      firstname: yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Required'),
  lastname: yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Required'),
    username:yup.string().email("Please enter a valid email").required("Email required"),
    pasword: yup.string().min(5).matches(passwordRules,{message: "Please create a stronger password"}).required("Password required"),
    conformpassword: yup.string().oneOf([yup.ref('password'),null],"Password must match").required("Confirm Password required"),
})
