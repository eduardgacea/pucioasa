import styled from "styled-components";

import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to: string;
};

const Button = styled.button`
  padding: 0.45rem;
  font-family: var(--sans);
  font-size: 1.25rem;
  letter-spacing: 1px;
  background-color: var(--khaki);
  border: 2px solid var(--davy-gray);
  color: var(--black);
  border-radius: 4px;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function LinkButton({ children, to }: Props) {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
}

export default LinkButton;
