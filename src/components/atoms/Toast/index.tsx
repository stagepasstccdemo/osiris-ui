import { Toaster as Toast, toast, ToasterProps } from "react-hot-toast";

export const Toaster = ({ ...props }: ToasterProps) => {
  return <Toast {...props} />;
};

export const useToast = () => {
  return toast;
};
