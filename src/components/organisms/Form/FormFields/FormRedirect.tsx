import { Button } from "@components/atoms";

export const FormRedirect = ({ name, children, errors, ...props }) => {
  return (
    <Button
      variant="link"
      fontSize="sm"
      fontWeight="regular"
      alignSelf="flex-end"
      mt={errors && errors[name] ? "5" : "1"}
      onClick={props.onClick}
    >
      {children}
    </Button>
  );
};
