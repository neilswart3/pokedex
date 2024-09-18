import { Header } from '@/components';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const GeneralLayout: React.FC<Props> = ({ children }) => (
  <div className="relative z-0 min-h-screen bg-gray-100 overflow-hidden">
    <Header />
    <main className="p-6">{children}</main>
  </div>
);

export default GeneralLayout;
