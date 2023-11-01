import * as yup from "yup";
export const facultySchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  faculty: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First Name Is Required"),
      lastName: yup.string().required("Last Name Is Required"),
      middleName: yup.string().required("Middle Name Is Required"),
    }),
    email: yup.string().email().required("Email Is Required"),
    dateOfBirth: yup.string().required("Date Of Birth Is Required"),
    gender: yup.string().required("Gender Is Required"),
    contactNo: yup.string().min(8).max(15).required("Contact No is required"),
    emergencyContactNo: yup
      .string()
      .min(8)
      .max(15)
      .required("Emergency Contact No is required"),
    presentAddress: yup.string().required("Present Address is required"),
    permanentAddress: yup.string().required("Permanent Address is required"),
    academicFaculty: yup.string().required("Academic Faculty is required"),
    academicDepartment: yup
      .string()
      .required("Academic Department is required"),
    designation: yup.string().required("Designation Faculty is required"),
  }),
});
