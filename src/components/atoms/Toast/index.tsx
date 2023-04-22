import { Toaster as Toast, toast } from "react-hot-toast";

export const Toaster = ({ ...props }) => {
  return <Toast {...props} />;
};

export const useToast = () => {
  return toast;
};
