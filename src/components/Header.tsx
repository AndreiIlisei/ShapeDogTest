import Link from "next/link";
import React from "react";
import { Container } from "../styles/Container";
import { NavElement, HeaderElement } from "../styles/HeaderElements";
import { HeaderProps } from "../types";


const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderElement>
      <Container>
        <Link href="/">
          <NavElement> Dog Land </NavElement>
        </Link>

        <Link href="/favourite">
          <NavElement> Favourite Dogs </NavElement>
        </Link>
      </Container>
    </HeaderElement>
  );
};

export default Header;
