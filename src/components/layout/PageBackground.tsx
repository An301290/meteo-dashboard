import { ReactNode } from 'react';
import bg from '../../assets/background.svg';

export function PageBackground({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </div>
  );
}
