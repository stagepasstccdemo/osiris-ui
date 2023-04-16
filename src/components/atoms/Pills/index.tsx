import { styles } from "./styles";
import { PillsProps } from "./types";

export const Pills = ({ selected = false }: PillsProps) => {
  return (
    <div
      className={selected ? styles.selected : styles.unselected}
      data-testid="pills"
    />
  );
};
