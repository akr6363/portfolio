import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {Container} from "../assets/styles/stylesComponents";
import {Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    const [isOpenMenu, setIsOpenMenu] = useState(false)

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

    const closeMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <HeaderBlock $scrolled={scrolled}>
            <Container $alignRight>
                <Nav className={isOpenMenu ? 'open' : ''}>
                    <li>
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about-me" spy={true} smooth={true} duration={500} onClick={closeMenu}>
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} onClick={closeMenu}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} onClick={closeMenu}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contacts" spy={true} smooth={true} duration={500} onClick={closeMenu}>
                            Contacts
                        </Link>
                    </li>
                </Nav>
                <Burger className={isOpenMenu ? 'open' : ''} onClick={closeMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Burger>
            </Container>
        </HeaderBlock>
    );
};

interface HeaderBlockProps {
    $scrolled?: boolean;
}

const Burger = styled.div`

  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #fff;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;
  }


  @media (max-width: 650px) {
    display: flex;

    &.open {
      display: block;

      span {
        right: 50%;
        position: absolute;
        height: 100%;
        width: 3px;
        transition: transform 0.3s ease-in-out;
      }

      span:first-child {
        transform: rotate(45deg);

      }

      span:last-child {
        transform: rotate(-45deg);
      }

      span:nth-child(2) {
        display: none;
      }
    }
  }
`
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

    a.active {
      :before {
        scale: 1;
      }

      color: var(--main-color);
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

  @media (max-width: 650px) {
    position: absolute;
    flex-direction: column;
    background-color: rgba(33, 37, 41, 0.89);
    left: -100%;
    top: 0;
    padding: 70px 15px;
    align-items: start;
    width: 100%;
    height: 100vh;

    transition: left 0.3s ease-in-out;
    li {
      margin-bottom: 15px;

      a {
        font-size: 20px;
      }
    }

    & li:not(:last-child) {
      margin-right: 0;
    }
    &.open {
      display: flex;
      left: 0;
      transition: left 0.3s ease-in-out;
    }
  }

`