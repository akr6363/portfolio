import React from 'react';
import styled, {css} from "styled-components";
import {Container} from "../App";

export const Main = () => {
    return (
        <MainBlock>
            <TextBlock>
                <Container>
                    <MainTitle>Hi, I'm ANYA</MainTitle>
                    <MainTitle $black>KRASILNIKOVA</MainTitle>
                    <Title>Frontend developer</Title>
                    <Button>Hire me</Button>
                </Container>
            </TextBlock>
            <LeftBgc></LeftBgc>
            <RightBgc></RightBgc>
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
  background-color: #dee1b8;
  height: 100%;
  flex: 1 1 40%;
  
`
const RightBgc = styled.div`
  background-color: #d9e72b;
  height: 100%;
  flex: 1 1 60%;
`
const TextBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`

interface MainTitleProps {
    $black?: boolean;
}

const MainTitle = styled.h1<MainTitleProps> `
  -webkit-text-stroke: 1px #000;
  color: transparent;
  font-size: 80px;
  font-weight: 900;

  line-height: 1.1;
  max-width: 290px;
  ${props => props.$black && css`
    color: #000;
    max-width: 100%;
  `}
`

const Title = styled.h2 `
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: var(--main-color);
  margin-top: 10px;
  margin-bottom: 34px;
`

export const Button = styled.button `
  border-radius: 4px;
  background-color: transparent;
  padding: 10px 30px;
  border: 2px solid #213F6C;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: var(--main-color);
`