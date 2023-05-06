import React from 'react';
import {Container} from "../App";
import {Button} from "./Main";
import styled from "styled-components";

const AboutMe = () => {
    return (
        <Section>
            <Container>
                <SectionTitle>ABOUT ME</SectionTitle>
                <AboutMeBlock>
                    <AboutMeLeft>
                        <MePhoto>
                            <img
                                src="http://flomaster.club/uploads/posts/2021-11/1637749496_1-flomaster-club-p-chelovek-risunok-dlya-detei-detskie-1.jpg"
                                alt=""/>
                        </MePhoto>
                    </AboutMeLeft>
                    <AboutMeRight>
                        <AboutMeTitle>I’m Anya</AboutMeTitle>
                        <AboutMeSubTitle>Frontend Developer </AboutMeSubTitle>
                        <AboutMeText>
                            Hi! My name is Albert Walkers. I am a Web Developer, and I'm very passionate and dedicated
                            to
                            my work. With 20 years experience as a professional Web developer, I have acquired the
                            skills and knowledge necessary to make your project a success.
                        </AboutMeText>
                        <table>
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
                        </table>
                        <Button>Download CV</Button>
                    </AboutMeRight>
                </AboutMeBlock>
            </Container>
        </Section>
    );
};

export default AboutMe;

const Section = styled.div`
  margin: 100px 0;
`

const AboutMeBlock = styled.div`
  display: flex;
`
const AboutMeLeft = styled.div`
  flex: 1 1 40%;
`
const AboutMeRight = styled.div`
  flex: 1 1 60%;
`

const MePhoto = styled.div`
  overflow: hidden;
  position: relative;
  height: 100%;
  margin-right: 68px;

  & img {
    position: absolute;
    height: 100%;
    object-fit: contain;
  }
`
const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 72px;
`
const AboutMeTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 163.5%;
`

const AboutMeSubTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 163.5%;
  color: var(--main-color);
  margin-bottom: 32px;
`
const AboutMeText = styled.p`
  margin-bottom: 24px;
`

const TableRow = styled.tr`
  & td {
    padding: 6px 0;
  }

  & td:first-child {
    font-weight: 700;
  }

  & td:last-child {
    padding-left: 23px;
  }
`

const Table = styled.table`
  margin-bottom: 32px;
`