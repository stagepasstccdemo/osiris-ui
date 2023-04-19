import { useState } from "react";
import {
  FormErrorMessage,
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import ChakraWrapper from "@providers/ChakraWrapper";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Text } from "../Text";

export const Input = ({ type, ...props }) => {
  const { name, register, error } = props;

  const [visibility, setVisibility] = useState(false);
  const handleToggleVisibility = () => setVisibility(!visibility);

  const helperIcon = () =>
    visibility ? (
      <AiOutlineEyeInvisible
        size={24}
        color="#EEEFFC"
        onClick={handleToggleVisibility}
      />
    ) : (
      <AiOutlineEye
        size={24}
        color="#EEEFFC"
        onClick={handleToggleVisibility}
      />
    );

  return (
    <ChakraWrapper>
      <InputGroup flexDirection="column" height="3.5rem">
        <ChakraInput
          id={name}
          type={type !== "password" ? type : visibility ? "text" : "password"}
          name={name}
          {...register(name)}
          {...props}
        />
        {type === "password" && (
          <InputRightElement h="100%" mr="0.5rem">
            {helperIcon()}
          </InputRightElement>
        )}
        {error && <Text color="alert.danger">{error.message}</Text>}
      </InputGroup>
    </ChakraWrapper>
  );
};
