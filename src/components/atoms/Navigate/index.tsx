import { navigateToUrl } from "single-spa";
import { Button } from "@components/atoms";
import { IPropsNavigate } from "./types";

export const Navigate: React.FC<IPropsNavigate> = (props: IPropsNavigate) => {
  const redirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    // analythics should be here
    navigateToUrl(e.currentTarget.name);
  };

  return (
    <Button
      aria-label={`Go to page ${props.children}`}
      type="button"
      name={props.path}
      onClick={redirect}
    >
      {props.children}
    </Button>
  );
};

Navigate.defaultProps = {
  children: "Go to page",
};
