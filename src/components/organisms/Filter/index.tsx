import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@components/atoms";
import { MultipleBadges } from "@components/molecules";
import { FilterProps } from "./types";

export const Filter = ({
  leftIcon,
  rightIcon,
  leftText,
  rightText,
  renderBadgesList,
  flexProps,
  boxProps,
  textProps,
}: FilterProps) => {
  return (
    <Flex flexDirection="column" {...flexProps}>
      <Box
        flexDir="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        {...boxProps}
      >
        <Flex alignItems="center" gap="5px" {...flexProps}>
          {leftIcon}
          <Text
            text={leftText}
            color="os-ternary.300"
            fontWeight="bold"
            {...textProps}
          />
        </Flex>
        <Flex alignItems="center" gap="5px" {...flexProps}>
          <Text
            text={rightText}
            color="os-ternary.300"
            fontWeight="bold"
            {...textProps}
          />
          {rightIcon}
        </Flex>
      </Box>
      <MultipleBadges mt="1.25rem" gap="10px" badges={renderBadgesList} />
    </Flex>
  );
};
