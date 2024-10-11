import styled from "styled-components";

export const StyledButton = styled.button<{ fullWidth?: boolean }>`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryActive};
  }

  &:disabled {
    background-color: #7c7d88;
    cursor: not-allowed;
  }
`;
