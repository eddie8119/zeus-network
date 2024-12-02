import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen px-3 text-white lg:px-8">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
