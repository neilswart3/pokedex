import { Header } from '@/components';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const GeneralLayout: React.FC<Props> = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="p-3">{children}</main>
  </div>
);

export default GeneralLayout;
