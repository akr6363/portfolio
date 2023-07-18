import React, {FC} from 'react';
import {ReactComponent as IconTg} from "../img/social-icon/tg.svg";
import {ReactComponent as IconInst} from "../img/social-icon/inst2.svg";
import {ReactComponent as IconMail} from "../img/social-icon/email.svg";
import {ReactComponent as IconLn} from "../img/social-icon/linkedin2.svg";
import {ReactComponent as IconGit} from "../img/social-icon/github.svg";
import styled, {css} from "styled-components";

type SocialNetworksPropsType = {
    style?: {}
}

export const SocialNetworks: FC<SocialNetworksPropsType> = ({style}) => {
    return (
        <SocialBlock style={style}>
            <a href="https://t.me/akr6363" target={'_blank'}><IconTg/></a>
            <a href='https://www.instagram.com/akr6363' target={'_blank'}><IconInst/></a>
            <a href="mailto:akr6363@mail.ru"><IconMail/></a>
            <a href='#'><IconLn/></a>
            <a href='https://github.com/akr6363?tab=repositories' target={'_blank'}><IconGit/></a>
        </SocialBlock>
    );
};


const SocialBlock = styled.div`
  display: flex;
  //margin-bottom: 20px;
  align-items: center;


  & a {
    display: block;
    width: 20px;
    height: 20px;
    :hover svg * {
      fill: var(--main-color);
      transition: fill 0.3s ease-in-out;
    }

    svg {
      height: 100%;
      width: 100%;

      * {
        fill: var(--light-gray-color);
        transition: fill 0.3s ease-in-out;
        
      }
    }
  }

  & a:not(:last-child) {
    margin-right: 10px;
  }
`
