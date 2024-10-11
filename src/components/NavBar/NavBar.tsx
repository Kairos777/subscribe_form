import React from "react";
import { NavContainer, NavItem, Logo, StyledLink } from "./styles";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <NavContainer role="navigation">
      <Logo
        src="https://e5s6t7j5.rocketcdn.me/wp-content/uploads/2024/07/cropped-cycode_logo_R.webp"
        alt="logo"
      />
      <NavItem>
        <StyledLink to="/" isActive={location.pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink
          to="/subscribe"
          isActive={location.pathname === "/subscribe"}
        >
          Subscribe
        </StyledLink>
      </NavItem>
    </NavContainer>
  );
};

export default NavBar;
