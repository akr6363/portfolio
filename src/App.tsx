import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import styled, {css} from "styled-components";
import {Main} from "./components/Main";
import AboutMe from "./components/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
        </div>
    );
}

export default App;

interface ContainerProps {
    $alignRight?: boolean;
}
export const Container = styled.div<ContainerProps> `
  width: 100%;
  max-width: 1120px;
  padding: 0 50px;
  margin: 0 auto;
  ${props => props.$alignRight && css`
    display: flex;
    justify-content: end;
  `}
`