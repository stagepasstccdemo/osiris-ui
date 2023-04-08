import RootContainer from "@providers/index";
import { Image, ImageProps } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";

interface ILogoProps extends ImageProps {}

export const Logo = ({ ...props }: ILogoProps) => {
  return (
    <RootContainer>
      <Image fallback={<FiUser />} {...props} />
    </RootContainer>
  );
};
