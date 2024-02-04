import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 12px;
`;

const LeftText = styled.div`
  margin-right: auto;
  font-weight: Bold;
  font-size: 26px;
  font-family: 'Roboto', sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavListItem = styled.li`
  margin-right: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  font-size: 17px;
  font-weight: 600;
  position: relative;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #808080;
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.18s ease-in-out;
  }

  &:hover:before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftText>Undefined</LeftText>
      <nav>
        <NavList>
          <NavListItem>
            <StyledLink to="/">Projects</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink to="/about">About</StyledLink>
          </NavListItem>
        </NavList>
      </nav>
    </NavbarContainer>
  )
}
