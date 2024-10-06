// Contact.jsx
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { Snackbar, Alert } from '@mui/material';
import './Sections.css';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 0px;
  color: #ffffff; /* White text */
  @media (max-width: 768px) {
    margin-top: 0px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #ffffff; /* White text */
  @media (max-width: 768px) {
    margin-top: 0px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 0px;
  gap: 12px;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #ffffff; /* White text */
`;

const ContactLabel = styled.label`
  font-size: 16px;
  color: #ffffff; /* White text */
  margin-bottom: 4px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: #f0f0f0; /* Light white background */
  border: 1px solid #ccc; /* Light gray border */
  outline: none;
  font-size: 18px;
  color: black; /* White text */
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: #f0f0f0; /* Light white background */
  border: 1px solid #ccc; /* Light gray border */
  outline: none;
  font-size: 18px;
  color: black; /* White text */
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: red;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: red;
  }
`;

const Contact = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpenSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setOpenError(true);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <h1 className='co'>Contact us</h1>
        <Desc>Feel free to reach out to us for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email us 🚀</ContactTitle>

          <ContactLabel htmlFor="from_email">Your Email</ContactLabel>
          <ContactInput
            type="email"
            id="from_email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <ContactLabel htmlFor="from_name">Your Name</ContactLabel>
          <ContactInput
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <ContactLabel htmlFor="subject">Subject</ContactLabel>
          <ContactInput
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />

          <ContactLabel htmlFor="message">Message</ContactLabel>
          <ContactInputMessage
            id="message"
            name="message"
            placeholder="Message"
            rows="4"
            required
          />

          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>

        <Snackbar
          open={openSuccess}
          autoHideDuration={6000}
          onClose={() => setOpenSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSuccess(false)}
            severity="success"
            sx={{ width: '100%' }}
            variant="filled"
          >
            Email sent successfully!
          </Alert>
        </Snackbar>

        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={() => setOpenError(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenError(false)}
            severity="error"
            sx={{ width: '100%' }}
            variant="filled"
          >
            Failed to send email. Please try again later.
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
