export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type PillsProps = ButtonProps & {
  key: string;
  selected?: boolean;
  setPage?: (page: string) => void;
  onClick?: any;
};
