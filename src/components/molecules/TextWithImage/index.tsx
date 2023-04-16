import { Heading, Image } from "@components/atoms";

export const TextWithImage = ({ as, text, ...props }) => {
  return (
    <Heading as={as}>
      {text}
      <Image {...props} />
    </Heading>
  );
};
