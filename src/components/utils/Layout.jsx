import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#01191d]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;