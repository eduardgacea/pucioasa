import styled from "styled-components";

const StyledButton = styled.button``;

type Props = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ children, onClick }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
