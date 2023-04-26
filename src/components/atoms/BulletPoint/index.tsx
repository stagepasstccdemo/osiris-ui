type BulletPointProps = {
  children?: React.ReactNode;
  text?: string;
};

export const BulletPoint = ({ children, text }: BulletPointProps) => {
  return (
    <span className="absolute -right-4 -top-4 px-3 py-3 bg-os-ternary-300 rounded-full text-gray-100">
      {children || text}
    </span>
  );
};
