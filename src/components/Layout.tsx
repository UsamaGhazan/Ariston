import React from 'react';
import { Navbar } from './navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
};

export default Layout;
