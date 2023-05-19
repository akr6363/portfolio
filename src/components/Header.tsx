import React from 'react';
import styled from "styled-components";
import {Container} from "../assets/styles/stylesComponents";



export const Header = () => {
    return (
        <HeaderBlock>
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

const HeaderBlock = styled.div`
  position: sticky;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: var(--gray-color);
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  //---start
  position: absolute;
  background-color: transparent;
  box-shadow: none;
  //---start
  & .header_container {
    margin: 0;
  }
`


const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  & li:not(:last-child) {
    margin-right: 36px;
    
  }
  & a {
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    
  }

`