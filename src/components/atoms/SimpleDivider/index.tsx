import { Flex } from "../Flex";

type SimpleDividerProps = {
  numDots: number;
  padding: string | number;
};

export const SimpleDivider = ({ numDots, padding }: SimpleDividerProps) => {
  const dots = [];
  for (let i = 0; i < numDots; i++) {
    dots.push(<span key={i} className="h-[6px] w-4 p-0.5 bg-gray-100" />);
  }
  return (
    <Flex flexDirection="row" gap="2" p={padding}>
      <span className="h-[6px] w-4 p-0.5 bg-gray-100 rounded-l-full" />
      {dots}
      <span className="h-[6px] w-4 p-0.5 bg-gray-100 rounded-r-full" />
    </Flex>
  );
};
