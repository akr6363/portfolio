import React from 'react';
import IconTg from "../img/social-icon/tg.svg";
import IconInst from "../img/social-icon/inst2.svg";
import IconMail from "../img/social-icon/email.svg";
import IconLn from "../img/social-icon/linkedin2.svg";
import IconGit from "../img/social-icon/github.svg";
import styled from "styled-components";

export const SocialNetworks = () => {
    return (
        <SocialBlock>
            <a href='#'><img src={IconTg} alt=""/></a>
            <a href='#'><img src={IconInst} alt=""/></a>
            <a href='#'><img src={IconMail} alt=""/></a>
            <a href='#'><img src={IconLn} alt=""/></a>
            <a href='#'><img src={IconGit} alt=""/></a>
        </SocialBlock>
    );
};


const SocialBlock = styled.div`
  display: flex;
  margin-bottom: 20px;

  & a {
    display: block;
    width: 20px;
    height: 20px;
  }

  & a:not(:last-child) {
    margin-right: 10px;
  }
`
