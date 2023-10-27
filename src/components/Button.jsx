import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #0077b6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005a99;
  }
`;

function Button({ children, onClick }) {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );
}

export default Button;
