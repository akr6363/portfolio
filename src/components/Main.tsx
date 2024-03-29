import React from 'react';
import styled, {css} from "styled-components";
import MainPhoto from '../img/mainPhoto3.jpg'
import {Button, Container} from "../assets/styles/stylesComponents";
import {HoverBlock} from "./Projects/ProjectItem";
import ReactTypingEffect from "react-typing-effect";
import {Link} from "react-scroll";


export const Main = () => {
    return (
        <MainBlock id={'home'}>
            <TextBlock>
                <Container>
                    <MainTitle>Hi, I'm ANYA</MainTitle>
                    <MainTitle $full>KRASILNIKOVA</MainTitle>
                    <Title>
                    <ReactTypingEffect
                        text={["Frontend developer."]}
                        speed={90}
                        typingDelay={500}
                        eraseSpeed={90}
                        eraseDelay={200}
                    />
                    </Title>
                    <Link activeClass="active" to="contacts" spy={true} smooth={true} duration={500}>
                        <Button>Hire me</Button>
                    </Link>
                </Container>
            </TextBlock>
            <LeftBgc></LeftBgc>
            <RightBgc>
                <img src={MainPhoto} alt=""/>
                <HoverBlock/>
            </RightBgc>
        </MainBlock>
    );
};

const MainBlock = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

`
const LeftBgc = styled.div`
  background-color: var(--gray-color);
  height: 100%;
  flex: 1 1 45%;
  @media (max-width: 1025px) {
    display: none;
  }

`
const RightBgc = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #e0e19f;
  height: 100%;
  flex: 1 1 55%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  & div {
    opacity: 0.6;
  }
  @media (max-width: 1025px) {
    & div {
      opacity: 0.8;
    }
  
`
const TextBlock = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  @media (max-width: 1025px) {
    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`

interface MainTitleProps {
    $full?: boolean;
}

const MainTitle = styled.h1<MainTitleProps>`
  -webkit-text-stroke: 1px #fff;
  color: transparent;
  font-size: 80px;
  font-weight: 900;

  line-height: 1.1;
  max-width: 290px;
  @media (max-width: 769px) {
    font-size: 60px;
    text-align: center;
  }
  @media (max-width: 650px) {
    font-size: 50px;
  }
  @media (max-width: 480px) {
    font-size: 35px;
  }
  ${props => props.$full && css`
    //-webkit-text-stroke: 1px #000;
    color: #fff;
    max-width: 100%;
    @media (max-width: 1025px) {
      -webkit-text-stroke: 1px #fff;
      color: #fff;
    }
  `}

`

const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: var(--main-color);
  margin-top: 10px;
  margin-bottom: 34px;
  @media (max-width: 650px) {
    font-size: 30px;
    margin-bottom: 24px;
  }
  @media (max-width: 480px) {
    font-size: 25px;
    margin-bottom: 14px;
  }

`

