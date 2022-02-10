import React from "react";
import { MainContainer } from "../styles/Container";
import { LayoutProps } from "../types";
import Header from "./Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <MainContainer>
          {children}
        </MainContainer>
      </div>
    </>
  );
};

export default Layout;
