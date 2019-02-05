import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from 'rebass';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Link } from 'gatsby';
const SubmitButton = styled(Button)`
  cursor: pointer;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondaryVeryLight};
`;

const Form = styled.form`
  margin: auto;
  padding: 10px;
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  background: ${props => props.theme.colors.secondaryVeryLight};

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  font-size: 1rem;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;

const Label = styled.label`
  padding: 5px;
  margin: 20px 0;
  margin-bottom: 50px;
  color: ${props => props.theme.colors.primary};
`;
const BackButton = styled.div`
  align-self: flex-start;
  margin-bottom: 50px;
  color: ${props => props.theme.colors.primary};
`;
const FlexBox = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;
const Back = styled.span`
  margin-left: 25px;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ArrowWrapper = styled.span`
  color: ${props => props.theme.colors.secondaryLight};
`;

const ContactForm = () => {
  return (
    <FlexBox>
      <Box p={3} width={[1, 1, 1 / 2]} bg="white">
        <BackButton>
          <Link style={{ textDecoration: 'none' }} to="/">
            <ArrowWrapper>
              <FontAwesome className="fa fa-2x fa-arrow-left" />
            </ArrowWrapper>
            <Back>Back</Back>
          </Link>
        </BackButton>
        <Form name="contact" method="POST" data-netlify="true">
          <p>
            <Label>
              Email: <Input type="text" name="name" />
            </Label>
          </p>
          <p>
            <Label>
              Message: <TextArea name="message" />
            </Label>
          </p>
          <div data-netlify-recaptcha="true" />
          <p>
            <SubmitButton>Send</SubmitButton>
          </p>
        </Form>
      </Box>
    </FlexBox>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
