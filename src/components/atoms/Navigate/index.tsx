import { navigateToUrl } from "single-spa";

interface IPropsNavigate {
  path: string;
  children?: React.ReactNode;
}

export const Navigate: React.FC<IPropsNavigate> = (props: IPropsNavigate) => {
  const redirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    // analythics should be here
    navigateToUrl(e.currentTarget.name);
  };

  return (
    <>
      <h1 className="font-bold  text-gray-100 bg-purple-950 p-4 w-[128px] text-center cursor-pointer">
        Hello world!
      </h1>
      <button
        aria-label={`Go to page ${props.children}`}
        type="button"
        name={props.path}
        onClick={redirect}
        style={{
          cursor: "pointer",
          background: "green",
          color: "white",
          padding: "20px 40px",
          border: "none",
        }}
      >
        {props.children}
      </button>
    </>
  );
};

Navigate.defaultProps = {
  children: "Go to page",
};
