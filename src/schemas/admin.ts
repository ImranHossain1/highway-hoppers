import * as yup from "yup";
export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First Name Is Required"),
      lastName: yup.string().required("Last Name Is Required"),
      middleName: yup.string().required("Middle Name Is Required"),
    }),
    email: yup.string().email().required("Email Is Required"),
    designation: yup.string().required("Designation Is Required"),
  }),
});
