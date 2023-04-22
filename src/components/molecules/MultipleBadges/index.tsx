import { Flex } from "@chakra-ui/react";
import { TextBadge } from "@components/atoms";
import { MultipleBadgesProps } from "./types";

export const MultipleBadges = ({ badges, ...props }: MultipleBadgesProps) => {
  const renderBadges = () => {
    return badges.map((badge) => <TextBadge key={badge.key} {...badge} />);
  };

  return <Flex {...props}>{renderBadges()}</Flex>;
};
