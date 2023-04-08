import ChakraWrapper from "./ChakraWrapper";

const RootContainer = ({children}) => {
  return (
    <ChakraWrapper>
      {children}
    </ChakraWrapper>
  );
};

export default RootContainer;