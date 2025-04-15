import { ReactNode } from "react";

const CardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-xl shadow-lg bg-white">
      {children}
    </div>
  );
};

export default CardWrapper;
