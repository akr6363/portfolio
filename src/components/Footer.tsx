import React from 'react';
import styled from "styled-components";
import {Container} from "../assets/styles/stylesComponents";
import {SocialNetworks} from "./SocialNetworks";

export const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <div>
                    Anna Krasilnikova<br/>
                    Frontend Developer
                </div>
                <div>
                    Russia<br/>
                    Saint-Petersburg
                </div>
                <div>
                    akr6363@mail.ru<br/>
                    +7-964-614-58-37
                </div>
                <SocialNetworks style={{ justifyContent: 'center'}}/>
            </Container>
        </FooterSection>
    );
};


const FooterSection = styled.div`
  background-color: #000;

  & > div {
    display: flex;
    padding-top: 25px;
    padding-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

  
    @media (max-width: 769px) {
      //flex-direction: column;
      justify-content: center;
      div {
        flex: 1 1 50%;
        text-align: center;
        margin-bottom: 15px;
      }
    }
  }

`