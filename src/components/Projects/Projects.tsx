import React from 'react';
import {Container, Section, SectionTitle} from "../../assets/styles/stylesComponents";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import {projects} from "./progects-data";

const Fade = require("react-reveal/Fade")


const Projects = () => {
    return (
        <Section id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <Fade left cascade>
                    <ProjectsRow>
                        {projects.map((pr, ind) => {
                            return (
                                <ProjectItem key={ind} title={pr.title} description={pr.description} img={pr.img}
                                             sourcesLink={pr.sourcesLink} viewLink={pr.viewLink}/>
                            )
                        })}
                    </ProjectsRow>
                </Fade>
            </Container>

        </Section>
    );
};

export default Projects;

const ProjectsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

`