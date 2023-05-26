import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {Container} from "../assets/styles/stylesComponents";



export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <HeaderBlock $scrolled={scrolled}>
            <Container $alignRight>
                <Nav>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contacts</a></li>
                </Nav>
            </Container>
        </HeaderBlock>
    );
};

interface HeaderBlockProps {
    $scrolled?: boolean;
}

const HeaderBlock = styled.div<HeaderBlockProps>`

  z-index: 1000;
  left: 0;
  top: 0;
  height: 60px;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  //---start
  position: absolute;
  background-color: transparent;
  box-shadow: none;
  transition: all 0.3s ease-in-out;
  //---start
  & .header_container {
    margin: 0;
  }
  ${props => props.$scrolled && css`
    position: fixed;
    background-color: var(--gray-color);
    opacity: 1;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease-in-out;
  `}
`


const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    position: relative;
    :hover a:before {
      scale: 1;
      transition: scale 0.3s ease-in-out; 
    }
  }
  
  & li:not(:last-child) {
    margin-right: 36px;
    
  }
  & a {
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    transition: color 0.3s ease-in-out;
    :hover {
      color: var(--main-color);
      transition: color 0.3s ease-in-out;
    }
    :before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--main-color);
      scale: 0;
      transition: scale 0.3s ease-in-out;
    }
    
  }

`