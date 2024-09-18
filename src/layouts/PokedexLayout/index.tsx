import { Header } from '@/components';
import Footer from '@/components/Footer';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {}

const PokedexLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-red-800">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PokedexLayout;
