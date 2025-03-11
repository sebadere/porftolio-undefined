import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 12px;
  position: relative; /* So the mobile menu can be absolutely positioned if needed */
`;

const LeftText = styled.a`
  text-decoration: none;
  color: inherit;
  margin-right: auto;
  font-weight: bold;
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

/* Hamburger Icon */
const HamburgerIcon = styled.div`
  width: 25px;
  height: 18px;
  position: relative;
  display: none;       /* Hidden by default (desktop) */
  cursor: pointer;

  /* Each bar in the hamburger */
  span {
    background: #333;
    border-radius: 2px;
    display: block;
    height: 3px;
    margin: 4px 0;
    transition: 0.4s;
    width: 100%;
  }

  @media (max-width: 768px) {
    display: block;   /* Show on mobile */
  }
`;

const NavList = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  /* Desktop styles */
  @media (min-width: 769px) {
    /* Keep as-is for desktop */
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    position: absolute;
    top: 60px; 
    right: 10px;
    flex-direction: column;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  }
`;

const NavListItem = styled.li`
  margin-right: 30px;

  @media (max-width: 768px) {
    margin: 10px 0;  /* Spacing in the mobile menu */
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
  // State to handle whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <LeftText href="#home">Undefined</LeftText>

      {/* Hamburger icon - only visible on mobile */}
      <HamburgerIcon onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerIcon>

      {/* Navigation Links */}
      <nav>
        <NavList open={menuOpen}>
          <NavListItem>
            <StyledLink href="#about" onClick={() => setMenuOpen(false)}>About</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink href="#projects" onClick={() => setMenuOpen(false)}>Projects</StyledLink>
          </NavListItem>
          <NavListItem>
            <StyledLink href="#contact" onClick={() => setMenuOpen(false)}>Contact us</StyledLink>
          </NavListItem>
        </NavList>
      </nav>
    </NavbarContainer>
  );
};
