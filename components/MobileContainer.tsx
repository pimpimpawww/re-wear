import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
  className?: string;
}

export default function MobileContainer({ children, className = '' }: MobileContainerProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`max-w-md mx-auto bg-white min-h-screen shadow-xl ${className}`}>
        {children}
      </div>
    </div>
  );
}
