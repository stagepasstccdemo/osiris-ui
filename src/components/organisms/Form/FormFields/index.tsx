import { FormInput } from "./FormInput";
import { FormRedirect } from "./FormRedirect";
import { FormSubmit } from "./FormSubmit";

export const FormFields = ({ children }) => {
  return { children };
};

FormFields.Input = FormInput;
FormFields.Submit = FormSubmit;
FormFields.Redirect = FormRedirect;
