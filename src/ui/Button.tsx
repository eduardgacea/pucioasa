import styled from "styled-components";

const StyledButton = styled.button`
  font-family: var(--sans);
  padding: 0.35rem;
  font-size: 1rem;
  cursor: pointer;
`;

type Props = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ children, onClick }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
