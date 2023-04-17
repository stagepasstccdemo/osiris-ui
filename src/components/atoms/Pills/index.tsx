import { styles } from "./styles";
import { PillsProps } from "./types";

export const Pills = ({ selected = false, onClick }: PillsProps) => {
  return (
    <button
      type="button"
      className={selected ? styles.selected : styles.unselected}
      data-testid="pills"
      onClick={onClick}
    />
  );
};
