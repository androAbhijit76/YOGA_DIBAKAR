// // import React from 'react';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Wrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
