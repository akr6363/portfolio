import React from 'react';
import {Button, Container, Section, SectionTitle} from "../assets/styles/stylesComponents";
import styled, {css} from "styled-components";
import PhoneImg from '../assets/images/contacts.png'

export const Contacts = () => {
    return (
        <Section $gray>
            <Container $contactsContainer>
                <ContactsContainer>
                    <SectionTitle>GET IN TOUCH</SectionTitle>
                    <p>Please fill out the form on this section to contact with me or send me an email. I will answer
                        you as
                        soon as I receive your message.</p>
                    <p>or connect with me via phone:</p>
                    <span>+7-964-614-58-37</span>
                    <ContactsForm action="">
                    <ContactsInput type="text" placeholder={'Name'}/>
                    <ContactsInput type="text" placeholder={'Email'}/>
                    <ContactsTextarea placeholder={'Your message'}></ContactsTextarea>
                    <Button>Send</Button>
                    </ContactsForm>
                </ContactsContainer>
            </Container>
        </Section>
    );
};




const ContactsContainer = styled.div `
    display: flex;
  flex-direction: column;
  //flex: 0 1 50%;
  
  & p {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 14px;
    max-width: 600px;
  }
  & span {
    font-weight: 700;
    margin-bottom: 30px;
  }
  & button {
    align-self: start;
  }
`


const inputs = css`
  border: 1px solid #fff;
  border-radius: 5px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  padding: 10px 12px;
  background: transparent;
  color: #fff;
  outline: none;
  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--light-gray-color);
  }
`

const ContactsInput = styled.input `
  margin-bottom: 14px;
  ${inputs}
`

const ContactsForm = styled.form `
 display: flex;
  flex-direction: column;
`



const ContactsTextarea = styled.textarea `
  margin-bottom: 30px;
  height: 116px;
  ${inputs}
`