import { Flex, FlexProps } from "@chakra-ui/react";
import { TextBadge } from "@components/atoms";
import { TextBadgeProps } from "@components/atoms/Badge/types";

type MultipleBadgesProps = TextBadgeProps &
  FlexProps & {
    badges: TextBadgeProps[];
  };

export const MultipleBadges = ({ badges, ...props }: MultipleBadgesProps) => {
  const renderBadges = () => {
    return badges.map((badge) => <TextBadge key={badge.key} {...badge} />);
  };

  return <Flex {...props}>{renderBadges()}</Flex>;
};
