import { InputProps } from "@chakra-ui/react";

export interface SearchInputProps extends InputProps {
  type: string;
  register?: (name: string, options?: any) => void;
  errors?: (name: string) => void;
}
