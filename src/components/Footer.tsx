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
                <SocialNetworks/>
            </Container>
        </FooterSection>
    );
};


const FooterSection = styled.div`
  background-color: #000;

  & > div {
    display: flex;
    padding: 25px 0;
    flex-direction: row;
    justify-content: space-between;
  }
`