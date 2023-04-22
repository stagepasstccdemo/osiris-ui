import { InputWithLabel } from "@components/molecules";

export const FormInput = ({ type, register, errors, name, ...props }) => {
  return (
    <InputWithLabel
      text="Value"
      placeholder="defult value"
      gap="5"
      bgColor="gray.700"
      color="gray.100"
      rounded="xl"
      focusBorderColor="os-primary.100"
      py={6}
      maxWidth="100%"
      name={name}
      _hover={{
        borderColor: "os-primary.100",
        transition: "0.1s ease-all",
      }}
      register={register}
      error={errors && errors[name]}
      type={type}
      {...props}
    />
  );
};
