import React from 'react';
import styled, {css} from "styled-components";
import IconTg from '../img/social-icon/tg.svg'
import IconInst from '../img/social-icon/inst2.svg'
import IconMail from '../img/social-icon/email.svg'
import IconLn from '../img/social-icon/linkedin2.svg'
import IconGit from '../img/social-icon/github.svg'
import AboutMePhoto from '../img/aboutMePhoto.jpg'
import {Button, Container, Section, SectionTitle} from "../assets/styles/stylesComponents";
import {SocialNetworks} from "./SocialNetworks";

const AboutMe = () => {
    return (
        <Section>
            <Container>
                <SectionTitle>ABOUT ME</SectionTitle>
                <AboutMeBlock>
                    <AboutMeLeft>
                        <MePhoto>
                            <img src={AboutMePhoto} alt=""/>
                        </MePhoto>
                    </AboutMeLeft>
                    <AboutMeRight>
                        <AboutMeTitle>I’m Anya</AboutMeTitle>
                        <AboutMeSubTitle>Frontend Developer </AboutMeSubTitle>
                        <AboutMeText>
                            Hi! My name is Albert Walkers. I am a Web Developer, and I'm very passionate and dedicated
                            to
                            my work. With 20 years experience as a professional Web developer, I have acquired the
                        </AboutMeText>
                        <AboutMeText>
                            Hi! My name is Albert Walkers. I am a Web Developer, and I'm very passionate and dedicated
                            to
                            my work. With 20 years experience as a professional Web developer, I have acquired the
                            skills and knowledge necessary to make your project a success.
                        </AboutMeText>

                        <Table>
                            <TableRow>
                                <td>Age:</td>
                                <td>24</td>
                            </TableRow>
                            <TableRow>
                                <td>English:</td>
                                <td>Pre-Intermediate</td>
                            </TableRow>
                            <TableRow>
                                <td>Phone:</td>
                                <td>+7-964-614-58-37</td>
                            </TableRow>
                            <TableRow>
                                <td>Location:</td>
                                <td>Saint-Petersburg</td>
                            </TableRow>
                            <TableRow>
                                <td>Mail:</td>
                                <td>akr6363@mail.ru</td>
                            </TableRow>
                        </Table>
                        <SocialNetworks style={{ marginBottom: "25px" }}/>
                        <Button>Download CV</Button>
                    </AboutMeRight>
                </AboutMeBlock>
            </Container>
        </Section>
    );
};

export default AboutMe;


const AboutMeBlock = styled.div`
  display: flex;
  @media (max-width: 1025px) {
    flex-direction: column;
  }
`
const AboutMeLeft = styled.div`
  position: relative;
  flex: 1 1 50%;


  &:before {
    content: "";
    background-color: var(--gray-color);
    width: 85%;
    height: 100%;
    position: absolute;
    bottom: -10%;
    left: -10%;
    z-index: 0;
    @media (max-width: 1200px) {
      display: none;
    }
  }
`
const AboutMeRight = styled.div`
  color: var(--light-gray-color);
  flex: 1 1 50%;
`

const MePhoto = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  margin-right: 68px;
  @media (max-width: 1025px) {
    padding-top: 60%;
    margin-right: 0;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      padding-top: 80%;
    }
  }

  & img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    object-fit: cover;
    @media (max-width: 1025px) {
      object-fit: contain;
    }
    @media (max-width: 768px) {
      object-fit: cover;
    }
  }
`

const AboutMeTitle = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 26px;
  text-transform: uppercase;
  line-height: 163.5%;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const AboutMeSubTitle = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  line-height: 163.5%;
  color: var(--main-color);
  margin-bottom: 20px;
`
const AboutMeText = styled.p`

  margin-bottom: 20px;
  line-height: 28px;
`

const TableRow = styled.tr`
  & td {
    padding: 4px 0;
  }

  & td:first-child {
    font-weight: 700;
  }

  & td:last-child {
    padding-left: 23px;
  }
`

const Table = styled.table`
  margin-bottom: 20px;
`