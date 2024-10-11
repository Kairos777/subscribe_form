import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #f8f9fb;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 16px;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const StyledLink = styled(Link)<{ isActive: boolean }>`
  text-decoration: none;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "black"};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  border-bottom: ${({ isActive, theme }) =>
    isActive ? `2px solid ${theme.colors.primary}` : "none"};
  padding-bottom: 3px;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryActive};
  }
`;
