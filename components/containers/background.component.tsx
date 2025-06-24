import { ReactNode } from "react";

type BackgroundAtomProps = {
  children: ReactNode;
};

export const Background = ({ children }: BackgroundAtomProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 p-16">
      {children}
    </div>
  );
};
