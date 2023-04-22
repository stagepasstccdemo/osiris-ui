import { Button } from "@components/atoms";

export const FormSubmit = ({ loading, children, ...props }) => {
  return (
    <Button
      isLoading={loading}
      bgColor="gray.700"
      color="gray.100"
      rounded="xl"
      width="100%"
      mb="10"
      py={6}
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
};
