import { Button, Text, IconButton, Flex } from "@components/atoms";
import { Divider } from "@components/molecules";
import { BsChatLeft } from "react-icons/bs";

export const Footer = ({ iconButton }: any) => {
  return (
    <footer>
      <Text
        text="looks like you hit the end of the page"
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
            <Text fontSize="3rem" text="go up" />
            <IconButton variant="ghost" icon={iconButton} />
          </Flex>
        </Button>
      </Flex>

      <Flex
        mt="4rem"
        flexDirection="column"
        width="70%"
        gap="5px"
        position="relative"
      >
        <Text text="need help with anything ?" color="os-ternary.300" />
        <Text text="Contact our chat support" color="os-secondary.100" />
        <Divider borderColor="os-primary.100" />
        <IconButton
          icon={<BsChatLeft size={28} color="F59415" />}
          position="absolute"
          right="0"
          top="1"
        />
      </Flex>
    </footer>
  );
};
