import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 12px;
`;

const LeftText = styled.a`
  text-decoration: none;
  color: inherit;
  margin-right: auto;
  font-weight: Bold;
  font-size: 26px;
  font-family: 'Roboto', sans-serif;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-right: 26px;
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

  @media (max-width: 768px) {
    margin-right: 20px;
    text-align: center;
  }
`;

const StyledLink = styled.a`
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
      <LeftText href='#home'>Undefined</LeftText>
      <nav>
        <NavList>
          <NavListItem>
            <StyledLink href="#about">About</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink href="#projects">Projects</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink href="#contact">Contact us</StyledLink>
          </NavListItem>
        </NavList>
      </nav>
    </NavbarContainer>
  )
}
