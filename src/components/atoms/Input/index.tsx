import { useState } from "react";
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import ChakraWrapper from "@providers/ChakraWrapper";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Input = ({ type, ...props }) => {
  const { name, register } = props;

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
      <InputGroup>
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
      </InputGroup>
    </ChakraWrapper>
  );
};
