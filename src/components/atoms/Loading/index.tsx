import { LoadingProps } from "./types";

export const Loading = ({ loadingMessage = "Loading..." }: LoadingProps) => {
  return (
    <div className="w-screen h-screen bg-os-secondary-100 flex justify-center items-center">
      <div
        className="animate-spin inline-block w-14 h-14 border-[4px] border-current border-t-transparent text-orange-600 rounded-full "
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">{loadingMessage}</span>
      </div>
    </div>
  );
};
