import { Box, Flex, Text } from "@components/atoms";
import { CardItem, MenuCardOptionProps } from "./types";

export const MenuCardOption = ({
  leftIcon,
  text,
  rightIcon,
  flexProps,
  boxProps,
  textProps,
  renderCardListItems,
}: MenuCardOptionProps) => {
  const renderCardOptionsMap = () => {
    return renderCardListItems.map((item: CardItem) => {
      return (
        <Flex justifyContent="space-between" alignItems="center" {...flexProps}>
          <Flex alignItems="center" justifyContent="flex-start" gap="8">
            <Box bgColor="gray.200" p={4} rounded="xl" {...boxProps}>
              {item.leftIcon}
            </Box>
            <Text
              text={item.text}
              fontSize="1.2rem"
              color="os-primary.100"
              {...textProps}
            />
          </Flex>
          {item.rightIcon}
        </Flex>
      );
    });
  };

  const renderBaseCardOption = () => {
    return (
      <Flex justifyContent="space-between" alignItems="center" {...flexProps}>
        <Box bgColor="gray.200" p={4} rounded="xl" {...boxProps}>
          {leftIcon}
        </Box>
        <Text
          text={text}
          fontSize="1.2rem"
          color="os-primary.100"
          {...textProps}
        />
        {rightIcon}
      </Flex>
    );
  };

  return (
    (renderCardListItems && renderCardOptionsMap()) || renderBaseCardOption()
  );
};
