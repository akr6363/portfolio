import React, {useState} from 'react';
import {Button, Container, Section, SectionTitle} from "../../assets/styles/stylesComponents";
import styled, {css} from "styled-components";
import PhoneImg from '../assets/images/contacts.png'
import {useFormik} from "formik";
import axios from "axios";

const Fade = require("react-reveal/Fade")
type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}


export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            _error: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            if (!values.email) {
                errors.email = 'Email is required';
            } else if ((!regexEmail.test(values.email))) {
                errors.email = 'Invalid email address';
            }
            if (!values.name) {
                errors.name = 'Password is required';
            } else if (values.name.trim().length < 3) {
                errors.name = 'Name cannot be shorter than 3 characters';
            }
            if (!values.message) {
                errors.message = 'Message is required';
            } else if (values.message.trim().length > 1000) {
                errors.name = 'message cannot be longer than 1000 characters';
            }
            return errors
        },
        onSubmit: (values, {resetForm, setFieldValue, setStatus, setFieldError}) => {
            setStatus('Please wait...')
            axios.post('http://localhost:3010/senMessage', values)
                .then(() => {
                    resetForm()
                    setFieldValue('message', '')
                    setStatus('Form has been submitted successfully.')
                    setTimeout(() => {
                        setStatus(null)
                    }, 3000)
                })
                .catch((error) => {
                    setStatus(null)
                    setFieldError('_error', error.message);
                })
        },
    })

    return (
        <Section $gray id={'contacts'}>
            <Fade cascade>
                <Container $contactsContainer>
                    <ContactsContainer>
                        <SectionTitle>GET IN TOUCH</SectionTitle>
                        <p>Please fill out the form on this section to contact with me or send me an email. I will
                            answer
                            you as
                            soon as I receive your message.</p>
                        <p>or connect with me via phone:</p>
                        <span>+7-964-614-58-37</span>
                        <ContactsForm onSubmit={formik.handleSubmit}>
                            {(formik.touched.name && formik.errors.name)
                                ? <ErrorMessage>{formik.errors.name}</ErrorMessage>
                                : null}
                            <ContactsInput placeholder={'Name'} {...formik.getFieldProps('name')}
                                           className={formik.touched.name && formik.errors.name ? 'error' : ''}/>
                            {(formik.touched.email && formik.errors.email)
                                ? <ErrorMessage>{formik.errors.email}</ErrorMessage>
                                : null}
                            <ContactsInput placeholder={'Email'} {...formik.getFieldProps('email')}
                                           className={formik.touched.email && formik.errors.email ? 'error' : ''}/>


                            {(formik.touched.message && formik.errors.message)
                                ? <ErrorMessage>{formik.errors.message}</ErrorMessage>
                                : null}
                            <ContactsTextarea
                                placeholder={'Write your message...'} {...formik.getFieldProps('message')}
                                className={formik.touched.message && formik.errors.message ? 'error' : ''}/>
                            {formik.status && <Status>{formik.status}</Status>}
                            {formik.errors._error && (
                                <GeneralError>{formik.errors._error}</GeneralError>
                            )}
                            <Button type={'submit'} disabled={formik.status === 'Please wait...'}>Send</Button>
                        </ContactsForm>
                    </ContactsContainer>
                </Container>
            </Fade>
        </Section>
    );
};

const Status = styled.div`
  margin-bottom: 10px;
  margin-top: -20px;
  color: var(--main-color);
`

const GeneralError = styled.div`
  margin-bottom: 10px;
  margin-top: -20px;
  color: red;
  color: red;
`
const ContactsContainer = styled.div`
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
  font-size: 15px;
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

  &.error {
    border-color: red;
  }
`

const ContactsInput = styled.input`
  margin-bottom: 14px;
  ${inputs}

`

const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
`


const ContactsTextarea = styled.textarea`
  margin-bottom: 30px;
  height: 116px;
  resize: none;
  ${inputs}

`
const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
`
