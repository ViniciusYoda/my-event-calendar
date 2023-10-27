import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #0077b6;
  color: #ffffff;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav``;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: #005a99;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>
        <Link to="/">DevConnect</Link>
      </HeaderTitle>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/">Feed</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Vagas</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
