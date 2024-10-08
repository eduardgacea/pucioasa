import { Link } from "react-router-dom";

import CartIcon from "./CartIcon";

import styled from "styled-components";
import LinkButton from "./LinkButton";

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--beige);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.p`
  font-size: 2.5rem;
  font-family: var(--serif);
  letter-spacing: 2px;
  color: var(--davy-gray);
`;

const Navigaton = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/shop">
        <Title>Pucioasa Banoasa</Title>
      </StyledLink>
      <Navigaton>
        <LinkButton to="/account">Contul meu</LinkButton>
        <CartIcon />
      </Navigaton>
    </StyledHeader>
  );
}

export default Header;
