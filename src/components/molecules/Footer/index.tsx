import { Button, Text, IconButton, Flex } from "@components/atoms";
import { Divider } from "@components/molecules";
import { BsChatLeft } from "react-icons/bs";
import { FooterProps } from "./types";

export const Footer = ({
  iconButton,
  primaryText,
  secondaryText,
  optionalText,
  buttonText,
  onlyChat = false,
}: FooterProps) => {
  return (
    <footer>
      {!onlyChat && (
        <>
          <Text
            text={primaryText}
            fontFamily="Raleway Dots"
            fontSize="3rem"
            maxWidth="80%"
          />

          <Flex justifyContent="flex-end" mt="2rem">
            <Button variant="ghost" alignSelf="end">
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                fontWeight="medium"
                gap="10px"
              >
                <Text fontSize="3rem" text={buttonText} />
                {iconButton}
              </Flex>
            </Button>
          </Flex>
        </>
      )}

      <Flex
        mt="4rem"
        flexDirection="column"
        width="70%"
        gap="5px"
        position="relative"
      >
        <Text text={secondaryText} color="os-ternary.300" />
        <Text text={optionalText} color="os-secondary.100" />
        <Divider borderColor="os-primary.100" />
        <IconButton
          icon={<BsChatLeft size={28} color="F59415" /> || iconButton}
          position="absolute"
          right="0"
          top="1"
        />
      </Flex>
    </footer>
  );
};

Footer.defaultProps = {
  iconButton: <BsChatLeft size={28} color="F59415" />,
  primaryText: "looks like you hit the end of the page",
  buttonText: "go up",
  secondaryText: "need help with anything ?",
  optionalText: "Contact our chat support",
  onlyChat: false,
};
