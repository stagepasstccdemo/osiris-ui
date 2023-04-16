import { styles } from "./styles";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type PillsProps = ButtonProps & {
  selected?: boolean;
};

export const Pills = ({ selected = false }: PillsProps) => {
  return (
    <div
      className={selected ? styles.selected : styles.unselected}
      data-testid="pills"
    />
  );
};
