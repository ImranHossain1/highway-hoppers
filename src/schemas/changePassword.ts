import * as yup from "yup";
export const changePasswrodSchema = yup.object().shape({
  oldPassword: yup.string().min(6).max(32).required(),
  newPassword: yup.string().min(6).max(32).required(),
});
