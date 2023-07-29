export type AccordionData = {
  id: string | number;
  title: string;
  pathTo: string;
};

export type AccordionProps = {
  data: AccordionData[];
  title: string;
};
