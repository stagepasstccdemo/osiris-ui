import { Input } from "@atoms/Input";
import { SearchInputProps } from "./types";

export const SearchInput = ({
  type,
  register,
  errors,
  ...props
}: SearchInputProps) => {
  return (
    <Input
      placeholder="Search..."
      name="searchEvent"
      rounded="1rem"
      height="3.2rem"
      _placeholder={{ color: "os-ternary.300" }}
      bgColor="gray.200"
      type={type}
      register={register}
      errors={errors}
      {...props}
    />
  );
};

SearchInput.defaultProps = {
  register: () => {},
  errors: {},
  type: "text",
};
