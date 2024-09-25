import { Outlet } from "react-router-dom";

import Header from "../ui/Header";

import styled from "styled-components";

const Container = styled.div`
  padding: 0 2rem;
`;

function ShopLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default ShopLayout;
