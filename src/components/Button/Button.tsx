import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  children,
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
};

export default Button;
