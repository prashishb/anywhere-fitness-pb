import axios from 'axios';

import React, { useState, useEffect } from 'react';


import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Login() {
  const { push } = useHistory();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/fitness/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', res.data.role);
        if ('role' === 'instructor') {
          push('/teacher')
        } else {
          push('/client')
        }
      })
      .catch(err => {

        console.log('LOGIN ERROR: ', err)

      })
  }

  return (
    <StyledForm>
      <StyledTitle>Login</StyledTitle>
      <StyledFormField onSubmit={handleSubmit}>
        <StyledLabel>
          Username

          <StyledInputs name='username' type='text' value={credentials.username} onChange={handleChange}/>

        </StyledLabel>

        <StyledLabel>
          Password

          <StyledInputs name='password' type='password' value={credentials.password} onChange={handleChange}/>

        </StyledLabel>

        <StyledButton>Log in</StyledButton>
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
