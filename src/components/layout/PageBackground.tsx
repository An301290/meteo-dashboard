import { ReactNode } from 'react';

export const PageBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center opacity-90"
      style={{ backgroundColor: '#02012C' }}
    >
      {children}
    </div>
  );
};
