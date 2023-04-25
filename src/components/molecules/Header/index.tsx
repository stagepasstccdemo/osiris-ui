import { Flex, Image } from "@chakra-ui/react";
import { Button, IconButton, Text } from "@components/atoms";
import { HeaderProps } from "./types";

export const Header = ({
  leftIcon,
  logoImg,
  userProfile,
  flexProps,
  imageProps,
  iconProps,
  buttonProps,
  textProps,
}: HeaderProps) => {
  return (
    <header>
      <Flex alignItems="center" justifyContent="space-between" {...flexProps}>
        <IconButton icon={leftIcon} {...iconProps} />
        <Image
          src={logoImg}
          alt="StagePass"
          objectFit="contain"
          width="180px"
          {...imageProps}
        />
        <Flex>
          <Button
            bgColor="os-primary.100"
            width="50px"
            height="50px"
            rounded="15px"
            {...buttonProps}
          >
            <Text color="gray.100" {...textProps}>
              {userProfile}
            </Text>
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};
