export type ModalProps = {
  children: React.ReactNode;
  headerModal: React.ReactNode;
  footerModal: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  bgColor?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
};
