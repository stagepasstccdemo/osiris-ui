import { styles } from "./styles";

type PillsProps = {
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
