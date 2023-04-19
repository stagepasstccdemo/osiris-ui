import ChakraWrapper from "@providers/ChakraWrapper";

import { Image } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { ILogoProps } from "./types";

export const Logo = ({ ...props }: ILogoProps) => {
  return (
    <ChakraWrapper>
      <Image {...props} />
    </ChakraWrapper>
  );
};
