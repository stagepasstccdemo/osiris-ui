/* eslint-disable no-nested-ternary */
import { useState } from "react";
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import ChakraWrapper from "@providers/ChakraWrapper";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Input = ({ type, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const renderBasedOnType = () =>
    show ? (
      <AiOutlineEyeInvisible size={24} color="#EEEFFC" onClick={handleClick} />
    ) : (
      <AiOutlineEye size={24} color="#EEEFFC" onClick={handleClick} />
    );

  return (
    <ChakraWrapper>
      <InputGroup>
        <ChakraInput
          type={type !== "password" ? type : show ? "text" : "password"}
          id={props.name}
          name={props.name}
          {...props.register(props.name)}
          {...props}
        />
        {type === "password" && (
          <InputRightElement h="100%" mr="0.5rem">
            {renderBasedOnType()}
          </InputRightElement>
        )}
      </InputGroup>
    </ChakraWrapper>
  );
};
