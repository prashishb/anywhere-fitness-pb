import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Register() {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '', 
    role: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/fitness/register', credentials)
      .then(res => {
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('role', res.data.role)
        push('/login')
      })
      .catch(err => {
        console.log('REGISTER ERROR: ', err);
      })
  }

  return (
    <StyledForm>
      <StyledTitle>Sign Up</StyledTitle>
      <StyledFormField onSubmit={handleSubmit}>
        <StyledLabel>
          Email
          <StyledInputs name='email' type='text' value={credentials.email} onChange={handleChange} />
        </StyledLabel>

        <StyledLabel>
          Username
          <StyledInputs name='username' type='text' value={credentials.username} onChange={handleChange} />
        </StyledLabel>

        <StyledLabel>
          Password

          <StyledInputs name='password' type='password' value={credentials.password} onChange={handleChange} />

        </StyledLabel>

        <StyledLabel>
          Role

          <StyledSelect name='role' value={credentials.role} onChange={handleChange}>

            <option value=''>- Select an option -</option>
            <option value='instructor'>Instructor</option>
            <option value='member'>Member</option>
          </StyledSelect>
        </StyledLabel>
        <StyledButton>Register</StyledButton>
      </StyledFormField>
    </StyledForm>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  margin-top: 10%; /* Temporary for now. Should remove once header component is added */
  width: 80%;
  border: 1px solid hsl(0, 0%, 82%);
  border-radius: 4px;
  box-shadow: 0 30px 60px -30px hsla(0, 0%, 0%, 0.5);
  padding: 2%;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 2%;
  @media (min-width: 1150px) {
    width: 25%;
  }
`;
const StyledFormField = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const StyledLabel = styled.label`
  width: 100%;
  font-weight: 700;
`;

const StyledInputs = styled.input`
  width: 100%;
  height: 3em;
  border: 0.1em solid hsl(0, 0%, 87%);
  border-radius: 4px;
  text-indent: 0.5em;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 3em;
  border: 0.1em solid hsl(0, 0%, 87%);
  border-radius: 4px;
  text-indent: 0.5em;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  width: 100%;
  padding: 4%;
  height: 2.5em;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  text-transform: uppercase;
  box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.16), 0 3px 6px hsla(0, 0%, 0%, 0.1);
  transition: all 0.5s ease-out;
  &:hover {
    background-color: hsl(0, 0%, 0%);
    color: hsl(0, 0%, 100%);
    box-shadow: 0 8px 6px -6px hsla(0, 0%, 0%, 0.3);
  }
  &:disabled {
    pointer-events: none;
  }
`;
